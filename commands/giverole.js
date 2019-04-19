const Discord = require("discord.js");

const fs = require("file-system")

const botconfig = require("../data/botconfig.json");

module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
	let guild = message.guild
      let sorry = client.emojis.get("555556287589515274")
   if(!message.member.hasPermission("ADMINISTRATOR")) return;
          let role = message.mentions.roles.first(); 
  let params = message.content.split(" ").slice(2).join(" ")
  if (role === undefined) {
    role = guild.roles.get(params) || guild.roles.find("name", params);
    let sorry = client.emojis.get("555556287589515274")
  }
      let please = client.emojis.get("555556306346573838")
    var mention = message.mentions.members.first()
     if(!mention) return message.channel.send(`**${sorry} | Mention Someone Please**`)
  if(!params) return message.channel.send(`**${please} | Type RoleName Please . **`)
 if (!role) return message.channel.send(`**${sorry} | Sorry I Cant Find Any Result; `+"``"+params+"``"+` **.`);
     if (mention.roles.has(role.id)) {
       mention.removeRole(role).then(r => {
 let roles = mention.roles.map(r => `${r};`).join("")
  var loal = role.hexColor
   if(loal === "#000000") loal = "#ec8f8f"
    let embed = new Discord.RichEmbed()
    .setAuthor(`${role.name} Role Removed;`,mention.user.avatarURL)
    .setTimestamp()
    .setColor(loal)
    .setDescription("```js"+`
ID; ${role.id}
Color; ${role.hexColor}
BotRole; ${role.managed}
`+"```")
.addField(`UserRoles;`,`Many; ${mention.roles.size - 1}\n Counter; ${roles}`)
    message.channel.send(embed)
  }).catch(err => {
     let sorry = client.emojis.get("555556287589515274")
    message.channel.send(`**${sorry} | I Miss `+"``"+`ADMINISTRATOR`+"``"+` Permissions . **`)
  })
     }
     if(!mention.roles.has(role.id)){
  mention.addRole(role).then(s => {
    let roles = mention.roles.map(r => `${r};`).join("")
    const me = message.guild.members.get(client.user.id)
  var loal = role.hexColor
   if(loal === "#000000") loal = color
    let embed = new Discord.RichEmbed()
    .setAuthor(`${role.name} Role Added;`,mention.user.avatarURL)
    .setTimestamp()
    .setColor(loal)
    .setDescription("```js"+`
ID; ${role.id}
Color; ${role.hexColor}
BotRole; ${role.managed}
`+"```")
.addField(`UserRoles;`,`Many; ${mention.roles.size - 1}\n Counter; ${roles}`)
    message.channel.send(embed)
  }).catch(err => {
     let sorry = client.emojis.get("555556287589515274")
    message.channel.send(`**${sorry} | I Misss `+"``"+`ADMINISTRATOR`+"``"+` Permissions . **`)
  })
    }}
	
	
	
module.exports.help = {
    name: "role"
}