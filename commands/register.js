const Discord = require("discord.js");
const sm = require("string-similarity");
const moment = require("moment");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
      let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
        let idenities = JSON.parse(fs.readFileSync("./data/idenities.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
       var name = '';
       var region = '';
       var gender = '';
       var age = '';
    var filter = m => m.author.id === message.author.id;
      var me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
       let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username,message.author.avatarURL || message.author.defaultAvatarURL)
       .setTimestamp()
       
       .setColor(loal)
.setFooter(client.user.username,client.user.avatarURL || client.user.defaultAvatarURL)
       .setDescription(`**${message.author} | Please Type Ur RealName , For Privacy Use Nickname <a:nc:555556341498904577>.**`)
        message.channel.send(embed).then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                .setDescription(`**${message.author} | Type Ur RegionName Please <a:ha:555556347060551701>**`)
                msgS.edit(embed).then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        region = collected.first().content;
                        collected.first().delete();
                    .setDescription(`**${message.author} | Type ur Gender Please , For Privacy Type \`\`Unlisted\`\` <:images:555556262545326094>.**`)
                    msgS.edit(embed).then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        gender = collected.first().content;
                        collected.first().delete();
                        .setDescription(`**${message.author} | Type Ur Age RightNow <:as:555556284599107584> .**`)
                        msgS.edit(embed).then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        .setDescription(`** Thanks Alot! Ur Request Will Accepted By Staff Soon! , <a:g_:555556298066755585> **.`)
                       msgS.edit(embed)
                       var acceptroom = client.channels.get("557595795239600165")
                       var me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
                       let ed = new Discord.RichEmbed()
                       .setColor(loal)
                       .setAuthor(`${message.author.username} Request idenity;`,message.author.avatarURL || message.author.defaultAvatarURL)
                       .setFooter(client.user.username,client.user.avatarURL)
                       .setDescription("```js"+`
ID; ${message.author.id}
RealName; ${name}
Region; ${region}
Gender; ${gender}
Age; ${age}`+"```")
                       acceptroom.send(ed).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅' && user.id != client.user.id
                                            let no = (reaction, usera) => reaction.emoji.name === '❎' && usera.id != client.user.id
                                            
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                             msgS.delete()
                                             
                                            
                                            message.author.send(`**Congratulations :warning: ${message.author} Ur Idenity Request was Accepted By Staff ✅ **. `)
                                            
         var me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
        let edwarda = new Discord.RichEmbed()
        edwarda.setColor(loal)
        edwarda.setAuthor(`${message.author.username} Idenity Card;`,message.author.avatarURL || message.author.defaultAvatarURL)
        edwarda.setDescription("||------------------------------------------------------||```js"+`
ID; ${message.author.id}
RealName; '${name}'
Region; ${region}
Gender; ${gender}
Age; ${age}`+"```")
edwarda.setTimestamp()
edwarda.setFooter(`Registerd At;`,client.user.avatarURL || client.user.defaultAvatarURL)
        if(message.author.avatarURL){
 edwarda.setThumbnail(message.author.avatarURL)
        }
        message.author.send(edwarda)
        let chs = client.channels.get("557728608882393108")
               chs.send(ed)
                               chs.send(`Accepted [ ${message.author} ]`)
                            
  idenities[message.author.id] = {
    name: name,
    region: region,
    gender: gender,
    age: age,
    rgtime: msgS.createdTimestamp
  };

  fs.writeFile("./data/idenities.json", JSON.stringify(idenities), (err) => {
    if (err) console.log(err)
  });
                                            
                                            })
                              dontSend.on('collect', r => {
                                  msgS.delete()
                                  message.author.send(`** :warning: | Ur Idenity Request was Denied By Staff <a:bc:555556341586853917> .**`)
                            
                              })})})})})})})})})})}
                        
                       
module.exports.help = {
    name: "register"
}