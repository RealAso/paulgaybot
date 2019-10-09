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
   
    
    if (message.author == client.users.get("208460141102759939")) {
        
           if(message.author.bot) return;
           var x = getRandomInt(0, 4);
           if(x == 1) {
            message.reply("frick you too");
           }
           if(x == 2) {
            message.reply("unblock me mark you know you want to");
           }
           if(x == 3) {
            message.reply("you're agnostic");
           }
                    
       }
    

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
