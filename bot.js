const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require("./package.json");
const talkedRecently = new Set();
const PREFIX = "!"

client.on('ready', () => {
   client.user.setPresence({
        game: {
            name: '!help',
            type: "WATCHING"
        }
   })

   console.log(`Bot Started!`)

});

client.on('message', message => {
	
    if (message.content === '!fortnite') {
		    message.delete(message)
		message.author.send("**Fortnite (New Accs Every 6-9 Hours)** \n http://bin.shortbin.eu:8080/AboZTQwfXs")
			message.reply(":white_check_mark: Please Check Your **DM**'s!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })
  	}


  	if (message.content === '!help') {
	    message.delete(message)
		message.author.send("**Commands** \n !help \n !fortnite")
			message.reply(":white_check_mark: Please Check Your **DM**'s!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })
  	}
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
