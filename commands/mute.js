const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Please specify a user to mute!");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I can't mute them because they have an important role!");
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("**You Dont Have Permission**").then(msg => msg.delete(5000));
    let muterole = message.guild.roles.find(`name`, "Muted");

	if(!muterole){
		try{
			muterole = await message.guild.createRole({
			name: "Muted",
			color: "#ec8f8f",
			permissions:[]
			})
			message.guild.channels.forEach(async (channel, id) => {
				await channel.overwritePermissions(muterole, {
					SEND_MESSAGES: false,
					ADD_REACTIONS: false,
				});

            });
        }catch(e){
            console.log(e.stack);
        }
    }

    await(tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> has been muted!`);
}

module.exports.help = {
    name: "mute"
}