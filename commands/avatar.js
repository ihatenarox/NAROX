const Discord = require("discord.js");
const fs = require("file-system")
const botconfig = require("../data/botconfig.json");
const shortUrl = require('node-url-shortener');

module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
    var mention = message.mentions.users.first() || message.author
    var mentionuser = message.guild.member(mention)
         const me = message.guild.members.get(client.user.id)
          var loal = mentionuser.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
    let embed = new Discord.RichEmbed()
    .setAuthor(`${mention.tag}`)
    .setColor(`${loal}`)
    .setTimestamp()
.setImage(`${mention.avatarURL}?size=128`)
    .setFooter(client.user.username,client.user.avatarURL)
    
    shortUrl.short(`${message.author.displayAvatarURL}`, function (err, avatarLink) {

message.channel.send(`[ ${avatarLink} ]`,embed)
})
  }
	
module.exports.help = {
    name: "avatar"
}