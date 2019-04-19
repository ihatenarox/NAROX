const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

exports.run = (client, message, args) => {
     let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
    const color = colors[message.guild.id].color || botconfig.color
      const me = message.guild.members.get(client.user.id)
        var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
      let rolesarray = message.guild.roles.filter(role => !role.managed)
      let roles = rolesarray.map(r => `${r} `+"``["+`${r.members.size}`+"]``"+`.`).join(" \n")
      let embed = new Discord.RichEmbed()
       .setAuthor(`${message.guild.name}`,message.guild.iconURL || message.author.avatarURL)
      .setColor(loal)
      .setThumbnail(message.author.avatarURL)
         .setFooter(client.user.username,client.user.avatarURL)
         .setTimestamp()
           .addField(`All;`,`${roles}`,false)

      message.channel.send(embed)
    }


module.exports.help = {
  name: "roles"
}