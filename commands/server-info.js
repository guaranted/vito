module.exports = {
    name: 'sunucu-bilgi',
    description: 'command to mute members',
    execute(message, args){
      
      
       const Discord = require('discord.js');
      const {MessageEmbed} = require('discord.js')
       
      
       let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Sunucu Bilgi")
            .setImage(message.guild.iconURL)
            .setDescription(`${message.guild} sunucusun bilgileri `)
            .addField("Kurucu", `${message.guild.owner}`)
            .addField("Üye Sayısı", `${message.guild.memberCount}`)
            .addField("Emoji Sayısı", `${message.guild.emojis.cache.size}`)
            .addField("Rol Sayısı", `${message.guild.roles.cache.size}`)
            

        message.channel.send(embed)
    }
  
  
  
}
