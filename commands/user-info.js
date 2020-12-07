module.exports = {
    name: 'bilgi',
    description: "Ping - Pong komutudur.",
    execute(message, args){
      
      const Discord = require('discord.js');
      const {MessageEmbed} = require('discord.js')
       let member = message.mentions.members.first();

      //if the member exists create an embed with info about that user and send it to the channel
      if(member) {
        let embed = new MessageEmbed()
          .setColor("white")
          .setTitle("Kişi Bilgileri")
          .setThumbnail(member.user.displayAvatarURL())
          .setAuthor(`${member.user.tag} (${member.id})`, member.user.displayAvatarURL())
          .addField("**Kullanıc Adı:**", `${member.user.username}`, true)
          .addField("**Kullanıcı Etiketi:**", `${member.user.discriminator}`, true)
          .addField("**Kullanıcı IDsi:**", `${member.user.id}`, true)
          .addField("**Durumu:**", `${member.user.presence.status}`, true)
          .addField("**Sunucuya Katılma Tarihi:**", `${member.joinedAt.toLocaleString()}`, true)
          .addField("**Hesap Oluşturulma Tarihi:**", `${member.user.createdAt.toLocaleString()}`, true)
          .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`)
          

        message.channel.send(embed);
      } else {
          message.channel.send(`:x:**∣** Kullanıcıyı bulamadım`); //send a message to the channel if the user doesn't exist
      }
    }
  }


      
      
      
      
      
      
      
      
      
      
    
