const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.login(NTgwODMxMjM4NTM4MDAyNDU0.XOWwMA.KpMrXEcNlq2ihUjrM1cYesU7G1A);
