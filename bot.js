const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {

    if (message.content.toLowerCase().includes('paul')) {

       if(message.author.bot) return;
        message.reply('PauL is fucking gay');
        message.reply(stats["paulAmount"]);

       }

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
