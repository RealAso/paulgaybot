const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")

client.on('ready', () => {

    console.log('I am gay! v48');

});



client.on("message", function (msg) {
	// if message begins with "ping"
	if(message.content == "C"){ // Check if content of message is "!ping"
		message.channel.send("onner's gay"); // Call .send() on the channel object the message was sent in
	}
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
