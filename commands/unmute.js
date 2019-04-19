const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Dont Have Permission**").then(msg => msg.delete(5000));
    let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tounmute) return message.reply("Couldn't find user.");
    let muterole = message.guild.roles.find(`name`, "Muted");
    
    
    await(tounmute.removeRole(muterole.id));
    message.channel.send(`<@${tounmute.id}> has been unmuted!`);
}

module.exports.help = {
    name: "unmute"
}