const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
let prefix = botconfig.prefix;
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
       if(!message.channel.guild) return
      const color = colors[message.guild.id].color || botconfig.color
         if(!message.member.hasPermission('ADMINISTRATOR'))  return;
          const me = message.guild.members.get(client.user.id)
          var lol = message.guild.verificationLevel
          var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
    const on = message.guild.members.filter(r => r.presence.status === "online").size
    const idle = message.guild.members.filter(r => r.presence.status === "idle").size
    const dnd = message.guild.members.filter(r => r.presence.status === "dnd").size
    const online = dnd + idle + on
    const hype = client.emojis.get("555235162041090049")
    const discordicon = client.emojis.get("555234055365459969")
    const owner = client.users.get(message.guild.owner.id)
  const ownerbadage = client.emojis.get("555502796473106502")
      const roles = message.guild.roles.map(r => `${r}`).sort((a, b) => a > b)
  const emojis = message.guild.emojis.map(r => `${r}`).sort((a, b) => a > b)
        let embed = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL || message.author.avatarURL)
      .setColor(loal)
      .setDescription("```js"+`
ID; ${message.guild.id}
Large; ${message.guild.large}
Region; ${message.guild.region}`+"```")
      .addField(`❯ Guild Owner ${ownerbadage};`,`${owner} ID;  \n`+"``{"+`${owner.id}`+"}``",true)
      .addField(`❯ Members Count ${discordicon};`,`Many; ${message.guild.memberCount} \n Active; ${online}`,true)
      //.addField(`❯ CreatedAt :date:;`,`${moment(message.guild.createdAt).locale('EN-us').fromNow()} \n`+"``["+`${moment(message.guild.createdAt).format('D/M/YYYY h:m A')}]`+"``",true)
       if(message.guild.roles.size != 2){
        .addField(`❯ Guild Roles :atom:;`,`Many; ${message.guild.roles.size} 
        Bot Roles; ${message.guild.roles.filter(role => role.bot).size}
        :leaves: More? ${prefix}roles`,true)
       }
         if(message.guild.emojis.size){
         .addField(`❯ Emojis :coffee:;`,`Many; ${message.guild.emojis.size}
         Animated; ${message.guild.emojis.filter(emoji => emoji.animated).size}
         :leaves: More? ${prefix}emojis`,true)
       }
        .setAuthor(`${message.guild.name} Server Information;  `,(message.guild.iconURL || message.author.avatarURL))
        .setTimestamp(message.guild.createdTimestamp)
        .setFooter("Server CreatedAt ;",client.user.avatarURL)
        message.channel.send(embed)
      
    }

module.exports.help = {
    name: "server"
}