const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}





client.once('ready', () => {
    console.log('gua adlı deneme botunuz aktif edildi!');
   client.user.setActivity(`${client.guilds.cache.size} Sunucu`);
  
client.user.setStatus('online');
})


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'avatar'){
        client.commands.get('avatar','av').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'reboot'){
        client.commands.get('reboot','reboot').execute(message, args);




    }
}
          );






client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'isim'){
        client.commands.get('isim','isim').execute(message, args);




    }
}
          );






client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'zar'){
        client.commands.get('zar').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'atatürk'){
        client.commands.get('atatürk').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'rusruleti'){
        client.commands.get('rusruleti').execute(message, args);




    }
}
          );







client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'pat'){
        client.commands.get('pat').execute(message, args);




    }
}
          );

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'yumruk'){
        client.commands.get('yumruk').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'kedi'){
        client.commands.get('kedi').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'anime'){
        client.commands.get('anime').execute(message, args);




    }
}
          );








client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'lock'){
        client.commands.get('lock').execute(message, args);




    }
}
          );

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'slowmode'){
        client.commands.get('slowmode').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'efkar'){
        client.commands.get('efkar').execute(message, args);




    }
}
          );







client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'zeka'){
        client.commands.get('zeka').execute(message, args);




    }
}
          );


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'kişi-bilgi'){
        client.commands.get('kişi-bilgi').execute(message, args);

    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'sunucu-bilgi'){
        client.commands.get('sunucu-bilgi').execute(message, args);

    }
}
          );





client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);




    }
}
          );







client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === '!ping') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const { MessageEmbed } = require('discord.js');
    const useruser = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const userurl =  message.author.displayAvatarURL({dynamic: true});
    const embed = new MessageEmbed()
    
      // Set the title of the field
      .setTitle('Gecikme Süresi')
      // Set the color of the embed
      .setColor("RANDOM")
    .setFooter(useruser, userurl)
      // Set the main content of the embed
      .setDescription(client.ws.ping + '  ms ')
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
     .setTimestamp();
    
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});











client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'warn1'){
        client.commands.get('warn1').execute(message, args);




    }
}
          );


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'soru'){
        client.commands.get('soru').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'gerigelsin'){
        client.commands.get('gerigelsin').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'covid'){
        client.commands.get('covid').execute(message, args);




    }
}
          );

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'yardım'){
        client.commands.get('yardım').execute(message, args);




    }
}
          );

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'moderasyon'){
        client.commands.get('moderasyon').execute(message, args);




    }
}
          );

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'eğlence'){
        client.commands.get('eğlence').execute(message, args);




    }
}
          );

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'genel'){
        client.commands.get('genel').execute(message, args);




    }
}
          );


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'banner'){
        client.commands.get('banner').execute(message, args);




    }
}
          );




client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'espri'){
        client.commands.get('espri').execute(message, args);




    }
}
          );





client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'warn2'){
        client.commands.get('warn2').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'warn3'){
        client.commands.get('warn3').execute(message, args);




    }
}
          );




client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'temizle'){
        client.commands.get('temizle').execute(message, args);


      
      client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);




    }
}
          );
      
      

       
      
    

    }
}
          );

client.on("guildCreate", async guild => {
  const sahip = [
    "Bot sunucuna eklendi.Tebrikler dostum.",
    "Bu bot **berke⍭hetfield✲※#2719** tarafından geliştirilmektedir.",
    'iyi günlerde kullan..'
  ];
  guild.owner.send(sahip);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
});








client.on('message', message => {
    if(message.content.startsWith(prefix + 'davet'))
    message.channel.send('https://discord.com/oauth2/authorize?client_id=771674804909637632&scope=bot&permissions=805314622')
})






client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'icon'){
        client.commands.get('icon').execute(message, args);




    }
}
          );








client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'emoji-ekle'){
        client.commands.get('emoji-ekle').execute(message, args);




    }
}
          );



client.on('ready', ()=>{
client.channels.cache.get('770345474896035870').join()
})
/////////////////////////////////////////////////////////////////
client.on('message', async msg => {
  if (msg.content === '<@771674804909637632>') return msg.channel.send("Prefixim !");
});








client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'kontrol'){
        client.commands.get('kontrol').execute(message, args);




    }
}
          );


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'otorol'){
        client.commands.get('otorol').execute(message, args);




    }
}
          );



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command =args.shift().toLowerCase();

    if(command === 'sahip'){
        client.commands.get('sahip').execute(message, args);




    }
}
          );




client.on('guildMemberAdd', async member => {//This command is codare's.
  let db = require('quick.db')
  
  let role = await db.fetch(`autorole.${member.guild.id}.role`)
  let channel = await db.fetch(`autorole.${member.guild.id}.channel`)
  let system = await db.fetch(`autorole.${member.guild.id}.system`) === true;
  
  if (!system) return;
  // if (!member.user.bot) return; Not: Bunu açarsanız botlara rolü vermez.
  if(!member.user.bot) return;
  
  member.roles.add(role);
  let ChannelSend = client.channels.cache.get(channel);
  ChannelSend.send(`Hey ${member.user.username} welcome to my server! I gave you role for members.`)

});

client.on('message', async msg => {
  if (msg.content === `<@771674804909637632>`) return msg.channel.send('Prefixim !');
});


  
client.login(process.env.TOKEN);
