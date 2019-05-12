const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {

    if (message.content == "!humanshit") {
        if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle("Human shit pile")
        .setDescription("here's where paige lists us in tier lists like fucking animals")
        .setAuthor("by paige, the human sadist")
        .setThumbnail("https://i.imgur.com/IBDi02f.jpg")
        .addField("THE S TIER", "TOM, JOE")
        .addField("THE A TIER", "PAUL (actual garbage)")
        .addField("THE B TIER", "ASAD")
        .addField("THE C TIER", "Paul gay bot")
        .addField("THE D TIER", "lol d, no ones here")
        .addField("THE E TIER", "JP")
        .addField("THE F TIER", "idk why paul isnt here")
        .setFooter("Please direct all complaints to ThePaggyShow © 2019");
        
        message.channel.send({embed});
        
    }
    
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
