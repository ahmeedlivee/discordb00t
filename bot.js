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
             message.author.send({embed: {
            color: 3447003,
            description: "hello!"
            }});
   message.channel.send({embed: {
            color: 3447003,
            description: ":white_check_mark: Please Check Your **DM**'s!"
            }});
  	}


  	if (message.content === '!help') {
	    message.delete(message)
            message.channel.send({embed: {
            color: 3447003,
            description: ":white_check_mark: Please Check Your **DM**'s!"
            }});
		message.author.send("**Commands** \n !help \n !fortnite")

            })
  	}
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
