const Discord = require("discord.js");
const malscraper = require('mal-scraper');
const talkedRecently = new Set();
let moment = require("moment")
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
  const search = `${args}`;
  let ok = client.emojis.get("555556347060551701")
  if(!search) return message.channel.send(`**${message.author} ${ok} | Please Type anime name **.`)
  let em = client.emojis.get("557362697482797066")
         const me = message.guild.members.get(client.user.id)
          var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
          message.channel.send(`**${em} | Searching About; **`+"``"+search+"``").then(msg => {
  malscraper.getInfoFromName(search)
    .then((data) => {
     
        let charcters = data.characters.map(ch => `[${ch.name}](${ch.link}) , `).join("")
        let staff = data.staff.map(st => `[${st.name}](${st.link}) , `).join("")
     let embed = new Discord.RichEmbed()
     let title = data.japaneseTitle
        if(!charcters) return msg.edit(`**Sorry I Cant Find Any Result; `+"``"+search+"``"+` **.`);
     if(data.synonyms) title = data.japaneseTitle + ` [${data.synonyms}] ;`
    .setColor(loal)
    .setAuthor(`${data.title} Anime Information;`,data.picture || message.author.avatarURL || message.author.defaultAvatarURL)
  .setThumbnail(data.picture || message.author.avatarURL || message.author.defaultAvatarURL)
  .setFooter(`Informations By;`,"https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png")
  .setTimestamp()
  .setDescription("```css"+`
Title; ${title}
Platform; ${data.type}
Score; ${data.score}
Scored By; ${data.scoreStats.slice(10)}
Count Of People; ${data.members}
Episodes; [${data.episodes}] ${data.duration}
Studios; ${data.studios}
Source; ${data.source}
`+"```")
.addField(`Characters;`,`${charcters}`,true)
.addField(`Genres;`,`${data.genres}`,true)
.addField(`Staff;`,`${staff}`,true)

      msg.edit(embed)
   }) })
    .catch((err) => console.log(err));


          talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 3000);
    }

module.exports.help = {
    name: "anime"
}