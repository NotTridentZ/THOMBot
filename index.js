const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.TOKEN;

const bot = new Discord.Client();

const idTommy = process.env.USER_ID;

var possibleMessage = ['tom?',
						'thom?',
						't0m?',
						'th0m?',
						'tom',
						'thom',
						't0m',
						'th0m',
						];

bot.on('ready', () => {
	//console.log('Bot is now Connected..');
	//console.log(process.env.TOKEN);
	//bot.channels.find(x => x.name == 'bot_testing_channel').send('anjay');
});

bot.on('message',(msg) => {
	if(msg.author.id != process.env.BOT_ID){
		for(var i=0; i<possibleMessage.length; i++){
			if(msg.content.toLowerCase().includes(possibleMessage[i])){
				msg.channel.send('<@'+idTommy+'>' + ' ' + '<:tom:606500335338520685>');
				return;
			}

			// const emojiList = msg.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
			// msg.channel.send(emojiList);
		}
	}
});

bot.login(token);