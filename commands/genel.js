module.exports = {
    name: 'genel',
    description: "Ping - Pong komutudur.",
    execute(message, args){
      
let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});

  let embed = new MessageEmbed()
  
  .setAuthor('Genel Komutlar')
  .setColor("RANDOM")
  .addField('!avatar', 'Etiketlediğniz,sizin avatarınızı gösterir')
  .addField('!icon', 'Sunucu iconunu gösterir')
  .addField('!sunucu-bilgi', 'Sunucu bilgilerini gösterir')
  .addField('!kişi-bilgi', 'Sizin bilgilerinizi gösterir')
  .addField('!banner', 'Yazdığınızı bannera dönüştürür')
  .addField('!covid', 'Covid vakalarını gösterir')
  .addField('!yardım', 'Komutlarımı gösterir beep bop')
  
  
  
  .setFooter(berke, karpuz)
 message.channel.send(embed) 
  }
}
