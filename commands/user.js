const Discord = require("discord.js");
const sm = require("string-similarity");
const moment = require("moment");
const botconfig = require("../data/botconfig.json");
const fs = require("file-system")

module.exports.run = async (client, message, args) => {
let yaw = client.emojis.get("555235020306907146")
    const mention = message.mentions.members.first() || message.member
    var color = botconfig.color
    var memberA = client.users.get(mention.id)
          message.guild.fetchInvites().then(invs => {
              let personalInvites = invs.filter(i => i.inviter.id === mention.id);
      let f = personalInvites.reduce((p, v) => v.uses + p, 0)
    const trueemoji = client.emojis.get("555167922276925460")
     const me = message.guild.members.get(client.user.id)
          var lol = message.guild.verificationLevel
          var loal = mention.displayHexColor 
          if(loal === "#000000") loal = me.displayHexColor
          if(loal === "#000000") loal = color
          var presence = mention.presence
          var st = presence.status
       if(presence.game == undefined)
       presence.game = "Nothing"
          let idle = client.emojis.get("555540481048838167")
          let dnd = client.emojis.get("555540479257739275")
          let online = client.emojis.get("555540475449442304")
          let stream = client.emojis.get("555540478616141834")
          let offline = client.emojis.get("555540478339186688")
          if(st == "offline")
          st = `${offline}`
          if(st == "idle")
          st = `${idle}`
          if(st == "dnd")
          st = `${dnd}`
          if(st == "online")
          st = `${online}`
           var gn = presence.game
          if(gn == undefined) 
          gn = "NOTHING"
           var gt = presence.game.type
            if(gt == undefined) 
gt = '**NOTHING**'
           if(gt == "0")
           gt = "Playing"
           
           if(gt == "2")
           gt = "Listening To"
           if(gt == "1"){
           gt = "Streaming"
           st = `${stream}`}
           if(gt == "3")
           gt = "Watching"
           let nitro = ""
           if(mention.premium)
           nitro = client.emojis.get("556179161195216896")
    let embed = new Discord.RichEmbed()
    .setColor(`${loal}`)
    .setTimestamp(mention.joinedTimestamp)
    .setFooter(`Member JoinedAt; `,mention.user.avatarURL || mention.user.defaultAvatarURL)
    if(!mention.user.bot){
   .setAuthor(`${mention.user.username} User Information; `,mention.user.avatarURL || mention.user.defaultAvatarURL)
    }
    if(mention.user.bot){
        .setAuthor(`${mention.user.username} Bot Information;`,mention.user.avatarURL)
    }
   //.addBlankField()
   if(!mention.user.bot){
   .setDescription(" ```js"+`
ID; ${mention.user.id}
Creation; ${moment(mention.user.createdAt).locale('EN-us').fromNow()}
Roles; ${mention.roles.size - 1}`+"```")
}
 if(mention.user.bot){
   .setDescription(" ```js"+`
ID; ${mention.user.id}
Creation; ${moment(mention.user.createdAt).locale('EN-us').fromNow()}
Bot; true`+"```")
}

if(mention.voiceChannel){

  if(mention.voiceChannel.members.size < 2) {
    .addField(`Currently VoiceChannel;`,`[${yaw}] ${mention.voiceChannel.name}`,true)
    
  }
if(mention.voiceChannel.members.size > 1){
  if(mention.voiceChannel.members.size < 5) {
      let em = client.emojis.get("555506446955970561")
 .addField(`Currently VoiceChannel;`,`[${yaw}] ${mention.voiceChannel.name} - \n${em} With ${mention.voiceChannel.members.size - 1} Members\n ${mention.voiceChannel.members.map(r => `${r};`).join("\n")}\n`,true)

  }
  
    
}
  if(mention.voiceChannel.members.size > 4) {
     .addField(`Currently VoiceChannel;`,`[${yaw}] ${mention.voiceChannel.name} - `+"``"+`${mention.user.username}`+"``"+`\n With ${mention.voiceChannel.members.size - 1} Members`,true)
  }}
if(presence.game != "Nothing") {
  if(presence.game == "Spotify"){
    
        if (memberA.createdAt == 'undefined') var createdAt = memberA.createdAt;
        else var createdAt = memberA.createdAt;

        if(memberA.presence.status == "online") var statusIcon = "[Online]";
        if(memberA.presence.status == "idle") var statusIcon = "[Idle]";
        if(memberA.presence.status == "dnd") var statusIcon = "[DnD]";
        if(memberA.presence.game != null) if(memberA.presence.game.url != null) var statusIcon = "[Streaming]"
        if(statusIcon ==  null) var statusIcon = "[Offline]" 
        
       
        
         
        if (memberA.presence.game != undefined && statusIcon == "[Streaming]" && memberA.presence.game.timestamps != null && memberA.presence.game.url != null) var game = {name: `Title: ${memberA.presence.game.name} \n streaming at ${memberA.presence.game.url}` , time: ""}
        else if (memberA.presence.game != undefined && statusIcon == "[Streaming]" && memberA.presence.game.url != null) var game = {name: `Title: ${memberA.presence.game.name} \n streaming at ${memberA.presence.game.url}` , time: ""}
        else if(memberA.presence.game != undefined && memberA.presence.game.timestamps.start != null && memberA.presence.game.name == "Spotify") var game = {name:memberA.presence.game.name, songName: memberA.presence.game.details, playlist: memberA.presence.game.assets.largeText, artist:memberA.presence.game.state ,time: moment(memberA.presence.game.timestamps.start).fromNow()}
        else if(memberA.presence.game != undefined && memberA.presence.game.timestamps.start != null) var game = {name:memberA.presence.game.name, time: moment(memberA.presence.game.timestamps.start).fromNow()}
        else if(memberA.presence.game != undefined)var game = {name:memberA.presence.game.name, time: "not defined"}
        else var game = {name: "", time: ""};
        
        
        if(game.name.length > 0 && game.time.length > 0 && game.name != "Spotify") var gameF = `${game.name} playing Since ${game.time}`;
        else if(game.name == "Spotify" && memberA.presence.game.assets.largeImage.startsWith("spotify:")) var gameF = `**Listening To;** ${game.songName}\n **Artist;** ${game.artist}\n **Album;** ${game.playlist}`;
        else if(game.name.length > 0 && gameF == null) var gameF = `${game.name}`;
        else var gameF = "Nothing playing right now";
        if(gameF == undefined)
  gameF = ""
   
         st = client.emojis.get("556169473254752296")
          
      //.setImage("https://cdn.discordapp.com/emojis/556169473254752296.png?v=1")
   // .addField('Status;',`${st} | ${gt} ${presence.game};\n${gameF}`,true)
   
  }
  //.addField(`Status;`,`${st} | ${gt} ${presence.game}`,true)
 

}
if(gameF == undefined)
  gameF = ""
   
if(!presence.game)
presence.game = ""
if(gt == "**NOTHING**")
gt = ""
if(presence.game == "YouTube"){
    let emoj = client.emojis.get("556284619117559839")
    var playing = client.emojis.get("557011651606478849")
    var playmode = presence.game.assets.smallText
    if(playmode == "Playback paused") playing = client.emojis.get("557013486924988416")
    .addField(`Status;`,`${emoj} | YouTube; \n**Watching;** ${presence.game.details}\n **ChannelName;** ${presence.game.state}\n **PlayMode;** ${playing}\n `,true)
    if(presence.game.assets) .setThumbnail(`${presence.game.assets.smallImageURL}`)
}
if(presence.game == "Fortnite"){
    let emoj = client.emojis.get("556283321018089472")
     var lol =  moment(presence.game.timestamps).locale("EN-us").fromNow()|| ""
     var gametime = "\n **Time;** " + lol
       if(lol != "Invalid date") lol = moment(presence.game.timestamps.start).locale("EN-us").fromNow()
    if(lol == "Invalid date") lol = ""
   if(lol == "") gametime = ""
    .addField(`Status;`,`${emoj} | Fortnite; \n**GameMode;** ${presence.game.details}\n **Team;** ${presence.game.state}\n **Tier;** ${presence.game.assets.smallText}\n ${gametime}`,true)
    if(presence.game.assets) .setThumbnail(`${presence.game.assets.largeImageURL}`)
    
}
if(presence.game == "Visual Studio Code"){
    let emoj = client.emojis.get("556276044378800138")
    
    var lol = moment(presence.game.timestamps).locale("EN-us").fromNow() || ""
    var time = `**Edit Time;** ${lol}`
      if(lol != "Invalid date") lol = moment(presence.game.timestamps.start).locale("EN-us").fromNow()
    if(lol == "Invalid date") lol = ""
   if(lol == "") time = ""
    .addField(`Status;`,`${emoj} | Visual Studio Code;\n **File;** ${presence.game.details.slice(8)}\n **FileType;** ${presence.game.assets.largeText}\n **Workspace;** ${presence.game.state.slice(9)}\n ${time}`,true)
    if(presence.game.assets) .setThumbnail(`${presence.game.assets.largeImageURL}`)
    
}
if(presence.game == "Spotify"){
  .addField('Status;',`${st} | **${presence.game}**;\n${gameF}\n`,true)
    .setThumbnail(`${mention.presence.game.assets.largeImageURL}?size=128`)
}
if(presence.game == "League of Legends"){
let emo = client.emojis.get("556254728258977792")
   //.setImage("https://cdn.discordapp.com/emojis/556254728258977792.png")
     var lol =  moment(presence.game.timestamps).locale("EN-us").fromNow()|| ""
     var gametime = "\n GameTime; " + lol
       if(lol != "Invalid date") lol = moment(presence.game.timestamps.start).locale("EN-us").fromNow()
    if(lol == "Invalid date") lol = ""
   if(lol == "") gametime = ""
   var assets = presence.game.assets
   if(!assets) {
       if(!presence.game.timestamps){
         .addField('Status;',`${st} |  ${gt} **${presence.game}**\n${gameF}\n`,true)
       }
       
              if(presence.game.timestamps) gameF = gameF + `Started From; ${moment(presence.game.timestamps.start).locale("EN-us").fromNow()} .`
           .addField('Status;',`${st} |  ${gt} **${presence.game}**\n${gameF}\n`,true)
       
   }
   if(assets){
     var charcter = presence.game.assets.largeText
      var char = "\nCharacter; "+charcter
     if(!charcter) charcter = ""
     if(charcter == "") char = ""
     var gamemode = presence.game.details
     var gamem = "\n GameMode; "+gamemode
     if(!gamemode) gamemode = ""
     if(gamemode == "") gamem = "" 
     .addField(`Status;`,`${emo} | League Of Legends;${gamem}\n GameStatus; ${presence.game.state}${gametime}${char}`,true)
     if(presence.game.assets) .setThumbnail(`${presence.game.assets.largeImageURL}`)
}}
if(presence.game != "Spotify"){
    if(presence.game != "League of Legends") {
        if(presence.game != "Visual Studio Code"){
           if(presence.game != "Fortnite"){
               if(presence.game != "YouTube"){
                .setThumbnail(mention.user.avatarURL || mention.user.defaultAvatarURL)
               if(presence.game.timestamps) gameF = gameF + `Started From; ${moment(presence.game.timestamps.start).locale("EN-us").fromNow()} .`
               if(st != client.emojis.get("555540478339186688")){
     .addField('Status;',`${st} |  ${gt} **${presence.game}**\n${gameF}\n`,true)
               }
             
    }}}}}


if(mention.nickname) {
  .addField(`Currently Nickname;`,`${mention.nickname} `,true)
}
  //console.log(mention.user.username)
    message.channel.send(embed)
        })}
module.exports.help = {
    name: "user"
}