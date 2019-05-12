const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {

    if (message.content.toLowerCase().includes('pp')) {
        if(message.author.bot) return;
        
        stats["pp"] += 1;
        
    }
    
    if (message.content == "!ppbigstats") {
        if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('Big PP Stats')
        .setColor('#800080')
        .addField("Amount *big* has been mentioned", stats["paulAmount"])
        .addField("Amount *pp* has been mentioned", stats["pp"]);
        
        message.channel.send({embed});
    }
    
    if (message.content.toLowerCase().includes('big')) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('I thought we were just looking')
        .setColor("#FF0000")
        .setDescription(';)')
        message.channel.send({embed});
        
        stats["paulAmount"] += 1;

       }
    

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
