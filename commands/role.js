const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")
exports.run = (client, message, args) => {
   let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
  const color = colors[message.guild.id].color || botconfig.color
	         if(!message.member.hasPermission('ADMINISTRATOR'))  return;
      let please = client.emojis.get("555556306346573838")
    if(!args[0]) return message.channel.send(`**${please} | Type Something Please . **`)
       const guild = message.guild;
  let params = message.content.split(" ").slice(1).join(" ");
  let role = message.mentions.roles.first(); 
   
  if (role === undefined) {
    role = guild.roles.find("name", params);
    let sorry = client.emojis.get("555556287589515274")
    if (!role) return message.channel.send(`**${sorry} | Sorry I Cant Find Any Result; `+"``"+args+"``"+` **.`);
  }
  let hoist = "null";
  if (role.hoist) {
    hoist = "Yes";
  }else {
    hoist = "No";
  }
  let mention = "null";
  if (role.mentionable) {
    mention = "Yes";
  }else {
    mention = "No";
  }
  let botrole = "null";
  if (role.managed) {
    botrole = "Yes";
  }else {
    botrole = "No";
  }
  let m_map = role.members.map(m=>m).join(";");
  
  if (m_map.length > 80) m_map = ""
  if(role.hasPermission("ADMINISTRATOR")) return message.channel.send(`**:lock: | Sorry , `+"``"+`${role.name}`+"``"+` Have `+"``"+`ADMINISTRATOR`+"``"+` Permissions **.`)
  const me = message.guild.members.get(client.user.id)
  var loal = role.hexColor
   if(loal === "#000000") loal = color
  const embed = new Discord.RichEmbed()
    .setColor(loal)
    .setAuthor(`${role.name} Informations;`,message.guild.iconURL)

    .setDescription("```js"+`
ID; ${role.id}
Color; ${role.hexColor}
BotRole; ${role.managed}
Postion; ${role.position}`+"```")
if (m_map) {
  .addField(`❯ Role Members;`,m_map,true)
  }

    .setFooter("Role CreatedAt;", client.user.avatarURL)
    .setTimestamp(role.createdTimestamp);
  message.channel.send({embed});


    }
	
	
	
module.exports.help = {
  name: "roleinfo"
}