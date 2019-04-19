const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
    let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
const color = colors[message.guild.id].color || botconfig.color

      message.channel.send(`:leaves: | Pinging ..`).then(msg => {
          var pingt = msg.createdTimestamp - message.createdTimestamp
          if(pingt >= 100) pingt = "Poor Connection"
          if(pingt <= 90) pingt = "Good Connection"
          if(pingt <= 60) pingt = "Epic Connection"
          if(pingt <= 20) pingt = "Speical Connection"
          if(pingt <= 10) pingt = "God Connection"
          var pinga = Math.round(client.ping)
          if(pinga >= 100) pinga = "Poor Connection"
          if(pinga <= 60) pinga = "Epic Connection"
          if(pinga <= 20) pinga = "Speical Connection"
          if(pinga <= 10) pinga = "God Connection"
      var me = message.guild.member(client.user)
      let sorry = client.emojis.get("555556287589515274")
       var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
      let embed = new Discord.RichEmbed()
      .setColor(loal)
      .setDescription(`${sorry} | Pong! - 
Time Taken; ${pingt} [${msg.createdTimestamp - message.createdTimestamp}]
DiscordAPI; ${Math.round(client.ping)}`)
.setFooter(client.user.username,client.user.avatarURL)
.setTimestamp()
      msg.edit(embed)
      })
    }

module.exports.help = {
    name: "ping"
}