const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));


 let prefix =  botconfig.prefix
    const color = colors[message.guild.id].color || botconfig.color
    
     var me = message.guild.members.get(client.user.id)
      var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
    let embed = new Discord.RichEmbed()
    .setColor(loal)
    .setAuthor(`N A R O X CommandsList;`,message.author.avatarURL || message.author.defaultAvatarURL)
     .setDescription("|| ---------------------------------------------------------- ||```css"+`
SelfCommands;
----------------------------------------
[${prefix}user] GuildMember Informations;
[${prefix}idenity] User IdenityCard;
[${prefix}ping] Client / Bot Internet Connection;
[${prefix}avatar] User Avatar;
[${prefix}anime] Anime Informations;
[${prefix}bot] Bot Informations / Status;
ServersCommands;
[${prefix}server] Guild / Server Informations;
[${prefix}channel] Channel Information;
[${prefix}emojis] Server Emojis List;
[${prefix}role] Gives Someone Role;
[${prefix}roleinfo] Role Informations;
[${prefix}members] Members Status;
[${prefix}roles] Server Roles List;
[${prefix}channel] Channel Informations;
[]
`+"```")
.setFooter(client.user.username,client.user.avatarURL)
    message.channel.send(embed)
    
}
module.exports.help = {
    name: "commands"
}