const Discord = require("discord.js");
const fs = require("file-system")
const botconfig = require("../data/botconfig.json");

module.exports.run = async (client, message, args) => {
   let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
  const color = colors[message.guild.id].color || botconfig.color
     const me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
      let emojis = message.guild.emojis.map(r => `${r}`).sort((a, b) => a < b).join(`,`)
      let emojisanimated = message.guild.emojis.filter(a=> a.animated).map(r => `${r}`).sort((a, b) => a < b).join(`,`)
      let emojisold = message.guild.emojis.filter(a=> !a.animated).map(r => `${r}`).sort((a, b) => a < b).join(`,`)
      
      let embed = new Discord.RichEmbed()
      .setColor(loal)
      .setAuthor(`${message.guild.name} Emojis List;`,message.guild.iconURL)
      .setDescription(`Many; ${message.guild.emojis.size}\n Animated; ${emojisanimated} [${message.guild.emojis.filter(a=> a.animated).size}]\n Normal; ${emojisold} [${message.guild.emojis.filter(a=> !a.animated).size}]`)
      .setFooter(client.user.username,client.user.avatarURL)
      .setTimestamp()
      message.channel.send(embed)
    }

  
  
  module.exports.help = {
    name: "emojis"
}