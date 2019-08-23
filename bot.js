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

  if (message.content === '!test') {
		    message.delete(message)
		message.author.send("**Fortnite (New Accs Every 6-9 Hours)** \n http://bin.shortbin.eu:8080/AboZTQwfXs")
			message.reply(":white_check_mark: Please Check Your **DM**'s!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })
  	}

  	if (message.content === '!help') {
		message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "This is an embed",
    url: "http://google.com",
    description: "This is a test embed to showcase what they look like and what they can do.",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
            })
  	}
  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
