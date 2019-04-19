const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
          const me = message.guild.members.get(client.user.id)
          var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
   let inviteEmbed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`If you want to invite the bot click **[here](https://discordapp.com/oauth2/authorize?client_id=${message.guild.me.id}&permissions=8&scope=bot)**`)
    .setColor(loal);
    
    message.channel.send(inviteEmbed).catch();
}
module.exports.help = {
    name: "invite"
}