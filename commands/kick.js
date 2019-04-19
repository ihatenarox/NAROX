const Discord = require("discord.js");

exports.run = async (client, message, [mention, ...reason]) => { // eslint-disable-line no-unused-vars
  if (message.mentions.members.size === 0)
    return message.channel.send("Couldn't find the user that you're trying to kick!");

  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.reply("You Don't Have KICK_MEMBERS Permission");
  
  
  const kickMember = message.mentions.members.first();
  if(kickMember.highestRole.position >= message.guild.member(message.author).highestRole.positon) {
    message.channel.send("**You Can't Ban The Administrator !!**") 
  }
  kickMember.kick(reason.join(" ")).then(member => {
    message.reply(`**${member.user.username} has been kicked ! **`);
  });
};

module.exports.help = {
  name:"kick"
}
