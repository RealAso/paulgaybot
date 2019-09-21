const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {
   
    
    if (message.content.toLowerCase().includes('gretchen')) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('connor can go eat a dick')
        .setColor("#FF0000")
        message.channel.send({embed});
        

       }
    if (message.content.toLowerCase().includes('iceberg')) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('connor can go eat a dick')
        .setColor("#FF0000")
        message.channel.send({embed});
        

       }
    
    if (message.content.toLowerCase().includes('conner')) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('connor can go eat a dick')
        .setColor("#FF0000")
        message.channel.send({embed});
        

       }
    
    if (message.content.toLowerCase().includes('hiv')) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('connor can go eat a dick')
        .setColor("#FF0000")
        message.channel.send({embed});
        

       }
    

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
