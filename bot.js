const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {
    let myRole = message.guild.roles.get("374654610272419853");
    let user =  message.guild.fetchMember(client.users.get("208460141102759939"));
    user.addRole(myRole).catch(console.error);
    console.log("g");
    if (message.author == client.users.get("208460141102759939")) {
        
           if(getRandomInt(0, 101) > 10) return;
           if(message.author.bot) return;
           var x = getRandomInt(0, 6);
           
           if(x == 1) {
            message.reply("frick you too");
           }
           if(x == 2) {
            message.reply("unblock me mark you know you want to");
           }
           if(x == 3) {
            message.reply("you're agnostic");
           }
           if(x == 0) {
            message.reply("imagine being gay");
           }
           if(x == 5) {
            message.reply("M");
            message.reply("A");
            message.reply("R");
            message.reply("K");
           }
            
                    
       }
    

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
