const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.TOKEN;

const bot = new Discord.Client();

const idTommy = process.env.USER_ID;

var possibleMessage = ['tom?','Tom?', 
						'tOm?','TOm?',
						'toM?','ToM?',
						'tOM?','TOM?',
						'thom?','Thom?',
						'tHom?','THom?',
						'thOm?','THOm?',
						'thoM?','THoM?',
						'thOM?','THOM?',
						'ThOm?','ThOM?',
						'ThoM?','tHoM?',
						'tHOm?',
						't0m?','T0m?',
						't0M?','T0M?',
						'th0m?','Th0m?',
						'tH0m?','TH0m?',
						'th0M?','TH0M?',
						'tH0M?','Th0M?',
						'tom','Tom', 
						'tOm','TOm',
						'toM','ToM',
						'tOM','TOM',
						'thom','Thom',
						'tHom','THom',
						'thOm','THOm',
						'thoM','THoM',
						'thOM','THOM',
						'ThOm','ThOM',
						'ThoM','tHoM',
						'tHOm',
						't0m','T0m',
						't0M','T0M',
						'th0m','Th0m',
						'tH0m','TH0m',
						'th0M','TH0M',
						'tH0M','Th0M',
						];

bot.on('ready', () => {
	//console.log('Bot is now Connected..');
	//console.log(process.env.TOKEN);
	//bot.channels.find(x => x.name == 'bot_testing_channel').send('anjay');
});

bot.on('message',(msg) => {
	if(msg.author.id != process.env.BOT_ID){
		for(var i=0; i<possibleMessage.length; i++){
			if(msg.content.includes(possibleMessage[i])){
				msg.channel.send('<@'+idTommy+'>' + ' ' + '<:tom:606500335338520685>');
				return;
			}

			// const emojiList = msg.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
			// msg.channel.send(emojiList);
		}
	}
});

bot.login(token);