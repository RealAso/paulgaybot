const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {
   
    
    if (message.author == client.users.get(374654610272419853)) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('Mark, you\'re agnostic')
        .setColor("#FF0000")
        message.channel.send({embed});
        

       }

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
