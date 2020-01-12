const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")

client.on('ready', () => {

    console.log('I am gay! v48');

});



client.on("message", (message) => {
	console.log('g');
	if(message.content == "C"){ // Check if content of message is "!ping"
		message.channel.send("onnor's gay"); // Call .send() on the channel object the message was sent in
	}
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
