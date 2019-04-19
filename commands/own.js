const Discord = require("discord.js");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
    const devs = botconfig.ownerID
  
 if (!devs.includes(message.author.id)) return message.reply(no + "**This command only for bot owner.**").then(m => {
   m.delete(2000)
 })
    message.channel.send(`** Help In dm sir , ${message.author}**`)
    message.author.send(``)
}

module.exports.help = {
    name: "own"
}