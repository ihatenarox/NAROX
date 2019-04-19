const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
    if(!message.channel.guild) return;
     const me = message.guild.members.get(client.user.id)
        
          var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
    const onf = message.guild.members.filter(r => r.presence.status === "online").size
    const idlef = message.guild.members.filter(r => r.presence.status === "idle").size
    const dndf = message.guild.members.filter(r => r.presence.status === "dnd").size
      const offlinef = message.guild.members.filter(r => r.presence.status === "offline").size
      let online = client.guilds.get("555224810486235137").emojis.find(r => r.name === "online2");
 let dnd = client.guilds.get("555224810486235137").emojis.find(r => r.name === "dnd2");
 let idle = client.guilds.get("555224810486235137").emojis.find(r => r.name === "idle2");
 let offline = client.guilds.get("555224810486235137").emojis.find(r => r.name === "offline2");
let all = client.guilds.get("555224810486235137").emojis.find(r => r.name === "stream2");
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} Members Status;`,message.guild.iconURL)
.setColor(loal)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
    .addField(`Progress;`,`${all}| Counter; ${message.guild.memberCount}\n ${online}| Online; ${onf}\n ${idle}| Idle; ${idlef}\n ${dnd}| DND; ${dndf}\n ${offline}| Offline; ${offlinef}`)
    message.channel.send(embed)
  }


module.exports.help = {
    name: "members"
}