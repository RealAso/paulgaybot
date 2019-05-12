const Discord = require('discord.js');

const client = new Discord.Client();



client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {

    if (message.content.includes('paul')) {

       message.reply('p a u l is fucking gay');

       }

});



// THIS  MUST  BE  THIS  WAY

client.login('NTc2OTE5NTI3Mjk2ODYwMTcx.XNgviw.X05pZcZrmHIfAcoAe1sFW4QVXkk');//BOT_TOKEN is the Client Secret
