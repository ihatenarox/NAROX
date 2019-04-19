const Discord = require("discord.js")
const superagent = require("superagent");
const randomPuppy = require('random-puppy');
const botconfig = require("../data/botconfig.json");
const color = botconfig.color
const talkedRecently = new Set();
module.exports.run = async (client, message, args) => {
      if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 30 secs before getting typing this again. - " + message.author);
    } else {
  randomPuppy('memes')
    .then(url => {
        const embed = new Discord.RichEmbed()
            .setTimestamp()
            .setImage(url)
            .setColor(color)
        message.channel.send(embed)
  })
}

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 30000);
    }

module.exports.help = {
  name:"meme"
}
