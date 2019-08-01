const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'namanh') {
    	message.reply('Nam Anh Loz');
  	}
});

client.on('message', message => {
    if (message.content === 'taiphung') {
    	message.reply('Tài Phùng Đzai');
  	}
});

client.on('message', message => {
    if (message.content === 'duchanh') {
    	message.reply('Hạnh xinh gái');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);      
