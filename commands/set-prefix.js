const Discord = require("discord.js");
const fs = require("fs");
let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
const botconfig = require("../data/botconfig.json");
module.exports.run = async (client , message, args) => {
const color = colors[message.guild.id].color || botconfig.color
  let role = message.guild.roles.find("name", "Admin");
  if(role && !message.member.roles.has(role.id))
      return message.reply("You do not have permission for that command!")
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: setprefix (prefix)");
         const me = message.guild.members.get(client.user.id)
          var loal = message.member.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
  let prefixes = JSON.parse(fs.readFileSync("./data/prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./data/prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let Embed = new Discord.RichEmbed()
    .setColor(`${loal}`)
  .setTitle("Changed Prefix")
  .setDescription(`Prefix has been set to **${args[0]}**`);

  message.channel.send(Embed);

}

module.exports.help = {
  name: "set-prefix"
}