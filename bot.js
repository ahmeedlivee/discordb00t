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
  description: "**Updates Every 6-9 Hours** \n http://bin.shortbin.eu:8080/XILjiXc1Fs \n https://discord.gg/RKYXJNP"
}});
			message.reply(":white_check_mark: Please Check Your **DM**'s!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })
  	}


  	if (message.content === '!help') {
		  message.delete(message)
			 message.author.send({embed: {
  color: 3447003,
  description: "**Help** \n !fortnite \n !help \n !invite \n https://discord.gg/RKYXJNP"
}});
  		message.reply(":white_check_mark: Please Check Your **DM**'s!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })
  	}

  if (message.content === '!invite') {
		    message.delete(message)
		 message.author.send({embed: {
  color: 3447003,
  description: "**Invite Link** \n https://discordapp.com/oauth2/authorize?client_id=613957045292367882&scope=bot&permissions=523328 \n https://discord.gg/RKYXJNP"
}});
			message.reply(":white_check_mark: Please Check Your **DM**'s!").then(m => {
                setTimeout(() => {
                    m.delete(m)
                }, 5000); //5 seconds
            })
  	}  
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
