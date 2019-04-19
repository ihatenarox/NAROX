const Discord = require("discord.js");
const botconfig = require("./data/botconfig.json");
const xp = require("./data/profile.json");
const fs = require("fs");

const bot = new Discord.Client
bot.commands = new Discord.Collection();
let colors = JSON.parse(fs.readFileSync("./data/colors.json", "utf8"));
fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);

  });

});

bot.on("ready", async () => {
    loggedIN = 1;
    bot.user.setStatus("idle")
    console.log(`${bot.user.username} is online!`);
    var indexActivity = 1;
    setInterval(() => {
        if (indexActivity === 1) {
            bot.user.setActivity(` ${bot.guilds.size} Servers`, {
                type: "LISTENING"
            }).catch();
            indexActivity = 2;
            return;
        }
        if (indexActivity === 2) {
            bot.user.setActivity(` ${bot.users.size -2} Users`, {
                type: "LISTENING"
            }).catch();
            indexActivity = 3;
            return;
        }
		if (indexActivity ===3) {
            bot.user.setActivity("Type ;help", {
                type: "LISTENING"
            }).catch();
            indexActivity = 1;
            return;
        }
			
    }, 15000);

});



bot.on("message", async message => {
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;


let xpAdd = Math.floor(Math.random() * 5) + 5;
  //console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1,
      yens: 0,
      Dislikes: 0,
      Followers: 0
    };
}

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 600;
  xp[message.author.id].xp = curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
  
   // let lvlup = new Discord.RichEmbed()
    //.setTitle("Level Up!")
    //.setColor("#ec8f8f")
    //.addField("New Level", curlvl + 1);

    //message.channel.send(lvlup).then(msg => {});
  }
    let ncred = xp[message.author.id].level * 3;
   if(ncred <= xp[message.author.id].xp){
var curyens = xp[message.author.id].yens

   if (!xp[message.author.id].shit) xp[message.author.id].shit = 0;
xp[message.author.id].shit+=1;
if (xp[message.author.id].shit == 10) xp[message.author.id].yens+=parseInt(Math.floor(Math.random()*15));
  fs.writeFile("./data/profile.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  })
}

 let prefix = botconfig.prefix
   let devs = botconfig.devs;
 let messageArray = message.content.split(" ")
 let cmd = messageArray[0];
 let args = messageArray.slice(1).join("")
 if(!colors[message.guild.id]){ 
  colors[message.guild.id] = {
    color: botconfig.color
  };
  
  fs.writeFile("./data/colors.json", JSON.stringify(colors), (err) => {
    if (err) console.log(err)})
 }
if(message.content.startsWith(botconfig.prefix)){
 let commandfile = bot.commands.get(cmd.slice(prefix.length));
 if(commandfile) commandfile.run(bot, message, args);
 
let xpAdd = Math.floor(Math.random() * 15) + 9;
  //console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
}

  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 600;
  xp[message.author.id].xp =  curxp + xpAdd;
  fs.writeFile("./data/profile.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
});

}
});

bot.login(botconfig.token);
