const Discord = require('discord.js');
const client = new Discord.Client();
let stats = require("./paulstats.json")

client.on('ready', () => {

    console.log('I am gay! v48');

});



client.on("message", function (msg) {
	// if message begins with "ping"
	if (msg.content == "C") {
		// send a message to the channel the ping message was sent in.
		client.sendMessage(msg.channel, "onner's gay");

		// alert the console
		console.log("pong-ed " + msg.author.username);
	}
});


// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret
