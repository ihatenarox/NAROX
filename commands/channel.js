const Discord = require("discord.js");
const moment = require("moment");
const fs = require("file-system")
const botconfig = require("../data/botconfig.json");
module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
               let sorry = client.emojis.get("555556287589515274")
         args = message.content.split(" ").slice(1).join(" ").replace(' ','-')
          let channel = message.mentions.channels.first()
  let please = client.emojis.get("555556306346573838")
  if(!channel){
  channel = message.guild.channels.find("name",`${args}`) 
      //  if(!args) return message.channel.send(`**${sorry} | Type channelName or #channel please ** .`)
}
     if(!channel){
       args = message.content.split(" ").slice(1).join(" ")
       channel = message.guild.channels.find("name",`${args}`)
     }
      if(!channel && message.member.voiceChannel)
          channel = message.member.voiceChannel
     if(!channel) channel = message.channel//return message.channel.send(`**${please} | Type channelName or #channel please ** .`)
      
         
         var me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
          var type = channel.type
         let nsfw =  channel.nsfw
          if(type == "voice")
          type = "Voice"
          if(type == "text")
          type = "Text"
        
        let embed = new Discord.RichEmbed()
     .setColor(loal)
     .setAuthor(`${channel.name} Channel Information;`, message.guild.iconURL)
     if(type == "Text"){
     .setDescription("```js"+`
ID; ${channel.id}
Type; ${type}
NFSW; ${nsfw}

`+"```")
}
.setThumbnail(message.author.avatarURL || message.author.defaultAvatarURL)

if(type == "Text"){
if(channel.topic){
    .addField(`ChannelTopic;`,"```js"+`
${channel.topic}`+"```",true)
}

    
}


if(type == "Voice"){
    if(channel.id == message.member.voiceChannel.id){
      let yaw = client.emojis.get("555235020306907146")
  .setDescription(`You Already In VoiceChannel ${yaw};`+"```js"+`
ID; ${channel.id}
ChannelType; ${type}
`+"```")
}
 if(channel.id != message.member.voiceChannel.id) {
    .setDescription("```js"+`
ID; ${channel.id}
ChannelType; ${type}
`+"```")
}
    if(channel.members.size != 0) {
    if(channel.members.size < 10) {
    .addField(`VoiceOnline;`,`${channel.members.map(r => `${r}`).join(" ")} [${channel.members.size}]`,true)
}
if(channel.members.size > 10){
    let yaw = client.emojis.get("555235020306907146")
      .addField(`VoiceOnline;`,`(${yaw}) -> [${channel.members.size}]`,true)
}}}
if(channel.parent) {
    .addField(`Category`,`**Name; **${channel.parent.name}
    **Childrens;** ${channel.parent.children.map(r => `${r};`).join("")}
    **ID;** ${channel.parent.id}`,true)
}
.setTimestamp(channel.createdTimestamp)
.setFooter(`Channel CreatedAt;`,message.guild.iconURL || message.author.avatarURL || message.author.defaultAvatarURL)
        message.channel.send(embed)
    }

module.exports.help = {
  name:"channel"
}

