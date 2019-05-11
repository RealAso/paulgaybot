const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content.includes('paul')) {

       message.reply('paul is fucking gay');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTc2OTE5NTI3Mjk2ODYwMTcx.XNdhyQ.rXhw91YnZeXA5F1MWv9IyfYrj0o);//BOT_TOKEN is the Client Secret
