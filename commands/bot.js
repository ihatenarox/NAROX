const Discord = require('discord.js');
const botconfig = require("../data/botconfig.json");
const fs = require('file-system');
const os = require("os");
var cpu = os.loadavg();
exports.run = (client, message) => {
      let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color;
      const me = message.guild.members.get(client.user.id);
        var loal = message.member.displayHexColor ;
          if(loal === "#000000") loal = me.displayHexColor;
          if(loal === "#000000") loal = color;
       let ms = client.uptime;
    let cd = 24 * 60 * 60 * 1000; // Calc days
    let ch = 60 * 60 * 1000; // Calc hours
    let cm = 60 * 1000; // Calc minutes
    let cs = 1000; // Calc seconds
    let days = Math.floor(ms / cd);
    let dms = days * cd; // Days, in ms
    let hours = Math.floor((ms - dms) / ch);
    let hms = hours * ch; // Hours, in ms
    let minutes = Math.floor((ms - dms - hms) / cm);
    let mms = minutes * cm; // Minutes, in ms
    let seconds = Math.round((ms - dms - hms - mms) / cs);
    if (seconds === 60) {
        minutes++; // Increase by 1
        seconds = 0;
    }
    if (minutes === 60) {
        hours++; // Inc by 1
        minutes = 0;
    }
    if (hours === 24) {
        days++; // Increase by 1
        hours = 0;
    }
    let dateStrings = [];
    if (days === 1) {
        dateStrings.push('1 day');
    } else if (days > 1) {
        dateStrings.push('' + String(days) + '** days');
    }
    if (hours === 1) {
        dateStrings.push('1 hour');
    } else if (hours > 1) {
        dateStrings.push('' + String(hours) + '** hours');
    }
    if (minutes === 1) {
        dateStrings.push('1 minute');
    } else if (minutes > 1) {
        dateStrings.push('' + String(minutes) + ' minutes');
    }
    if (seconds === 1) {
        dateStrings.push('1 second');
    } else if (seconds > 1) {
        dateStrings.push('' + String(seconds) + ' seconds');
    }
    let dateString = '';
    for (let i = 0; i < dateStrings.length - 1; i++) {
        dateString += dateStrings[i];
        dateString += ', ';
    }
    if (dateStrings.length >= 2) {
        dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
        dateString += 'and ';
    }
    dateString += dateStrings[dateStrings.length - 1];
    let embed = new Discord.RichEmbed()
    .setColor(loal)
    .setAuthor(client.user.username)
    .setThumbnail(client.user.avatarURL)
    .setDescription("```js"+`
ID; ${client.user.id}
Guilds; ${client.guilds.size}
Users; ${client.users.size}
Uptime; ${days}d. ${hours}h. ${minutes}m . ${seconds}s
[${dateString}]`+"```")
.setFooter(`✽ Client ReadyAt;`,client.user.avatarURL)
.addField(`✽ Ping;`,`${Math.round(client.ping)} ms`,true)
.addField(`✽ Narox Support;`,`[Click Here](https://discord.gg/ZeFUEpn)`,true)
.addField(`✽ FrameWork;`,`
Discord.JS; [11.3]
Node.js; [6.9.0]`,true)
.addField(`✽ Status;`,`
MemoryUsage; ${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB
CpuUsage; ${Math.ceil(cpu[1] * 100) / 10} %`,true)
    .setTimestamp(client.readyTimestamp);
    message.channel.send(`[ ${message.author} ] `,embed);
    
} ; 
    module.exports.help = {
    name: 'bot'
};