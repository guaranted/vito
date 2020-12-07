module.exports = {
    name: 'eğlence',
    description: "Ping - Pong komutudur.",
    execute(message, args){
      
let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});

  let embed = new MessageEmbed()
  
  .setAuthor('Eğlence Komutları')
  .setColor("RANDOM")
  .addField('!efkar', 'EfkarÄ±nÄ±zÄ± Ã–lÃ§er')
  .addField('!zar', '1 ile 10 arasında bir sayı atar')
  .addField('!zeka', 'Zeka seviyenizi ölçer')
  .addField('!gerigelsin', 'Gelip gelmeyeceği hakkında tahmin yapar')
  .addField('!soru', 'Belirttiğiniz soruyu cevaplar')
  .addField('!pat', 'Etiketlediğiniz kullanıcının kafasını okşarsınız')
  .addField('!atatürk', 'Atatürk gifleri atar')
  .addField('!yumruk', 'Etiketlediğiniz kullanıcıyı yumruklarsınız')
  .addField('!kedi', 'Kedi gifleri atar')
  .addField('!rusruleti', 'Rus ruleti oynarsınız')
  .setFooter(berke, karpuz)
  message.channel.send(embed)
  
  
  
  
  
  
  
  
  
  
  }
}
