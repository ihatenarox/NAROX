const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
    let mention = message.mentions.members.first() || message.member;
    if(mention.user.bot) return;
    
    const xp = require("../data/profile.json");
  if(!xp[mention.user.id]){
    xp[mention.user.id] = {
      xp: 0,
      level: 1,
      yens: 0,
      Dislikes: 0,
      Followers: 0
    };
 fs.writeFile("./data/profile.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
 })
      
  }
  
     var me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = "#ec8f8f"
    let embed = new Discord.RichEmbed()
    .setColor(loal)
    .setAuthor(`${mention.user.username} Profile Data;`,mention.user.displayAvatarURL)
    .setTimestamp(mention.user.createdTimestamp)
    .setFooter(`Account CreatedAt;`,mention.user.displayAvatarURL)
    .setDescription(``+"```js"+`
XP; ${xp[mention.user.id].xp}
Level; ${xp[mention.user.id].level}
Yens; ${xp[mention.user.id].yens}
Dislikes; ${xp[mention.user.id].Dislikes}
Followers; ${xp[mention.user.id].Followers}`+"```")
    message.channel.send(embed)
}
module.exports.help = {
    name: "profile"
}