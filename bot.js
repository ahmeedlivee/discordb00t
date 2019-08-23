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

            })
  	}

  	if (message.content === '!help') {
  		    message.delete(message)

            })
  	}
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
