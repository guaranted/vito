

module.exports = {
    name: 'rusruleti',
    description: 'command to mute members',
    execute(message, args){
      
      
      
       if (!message.mentions.users.first()) return message.reply("Birini etiketlemelisin"); //if no one is mentions , lets reply as
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('Kendinle oynayacak kadar yalnız mısın? Keşke birlikte oynayabilsek^^');
      
      
      
    let agam = message.mentions.users.first  
   
const {MessageEmbed} = require('discord.js')
const Discord = require("discord.js");
const resim = [`:gun: Tetik çekildi! Hala yaşıyorsun!`,

':gun: Tetik çekilir,ve mermi namludan çıkar. Öldün!' 



]
    
   message.channel.send(

  new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle(":gun: Bam")

  .setDescription(resim[Math.floor(Math.random() * resim.length)])
  
  

  .setTimestamp()

  )

}
    
    
    
    
    
    }


      
      
      
      
      
      
      
      
      
      
      
      
    
