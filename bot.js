const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")


client.on('ready', () => {

    console.log('I am ready!');

});



client.on('message', async message => {

    if (message.content.toLowerCase().includes('paul')) {

       if(message.author.bot) return;
        
        const embed = new Discord.RichEmbed()
        .setTitle('Paul is fucking gay')
        .setColor("#FF0000")
        .setDescription('dont deny it.')
        .setImage(message.guild.iconURL);
        message.channel.send({embed});

       }

});



// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
