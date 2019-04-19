const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const color = botconfig.color
const fs = require("file-system")
module.exports.run = async (client, message, args) => {
let prefixes = JSON.parse(fs.readFileSync("./data/prefixes.json", "utf8"));
 let prefix = botconfig.prefix
       let idenities = JSON.parse(fs.readFileSync("./data/idenities.json", "utf8"));
           let mention = message.mentions.users.first() || message.author;
           if(!idenities[mention.id] && mention == message.mentions.users.first()) return message.channel.send(`**${mention} | Dont Have Any Idenity Card . **`)
           if(!idenities[mention.id] && mention == message.author) return message.channel.send(`**${message.author} | You Dont Have Any IdenityCard Try `+"``"+` ${prefix}register`+"``"+` **.`)
         var me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = "#ec8f8f"
        let embed = new Discord.RichEmbed()
        .setColor(loal)
        .setAuthor(`${mention.username} Idenity Card;`,mention.avatarURL || mention.defaultAvatarURL)
        .setDescription("||------------------------------------------------------||```js"+`
RealName; ${idenities[mention.id].name}
Region; ${idenities[mention.id].region}
Gender; ${idenities[mention.id].gender}
Age; ${idenities[mention.id].age}`+"```")
.setTimestamp(idenities[mention.id].rgtime)
.setFooter(`Registerd At;`,client.user.avatarURL || client.user.defaultAvatarURL)
        if(mention.avatarURL){
 .setThumbnail(mention.avatarURL)
        }
        
        message.channel.send(embed)
    }
module.exports.help = {
    name: "idenity"
}