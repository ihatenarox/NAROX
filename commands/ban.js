const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You do not have the permission to execute this command!")
  let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
  if (!banMember) return message.reply("Couldn't find the user that you're trying to ban!")
  if(banMember.highestRole.position >= message.guild.member(message.author).highestRole.positon) {
    message.channel.send("**You Can't Ban The Administrator !!**") 
  }
  let reason = args.slice(1).join(" ")
  if (!reason) {
    const reason = "No reason provided."
  }
  if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply("Please give me the permission `BAN_MEMBERS`")
  if (!banMember.bannable) return message.reply("I cannot ban this user.")
  message.delete()
  banMember.send(`You have been banned from \`${message.guild.name}\` for: ${reason}`).then(() => {
    message.guild.ban(banMember, {
      reason: `${reason}`
    }).catch(e => message.channel.send("An error has occured with the command. Try again or join the support guild."))
  }).catch(err => message.guild.ban(banMember))
  message.channel.send(`**${banMember.user.tag} has been banned.**`)
}

module.exports.help = {
  name:"ban"
}
