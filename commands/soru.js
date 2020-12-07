module.exports = {
    name: 'soru',
    description: "Ping - Pong komutudur.",
    execute(message, args){
      
      const Discord = require('discord.js');
      
      
      
    const cevaplar = [
    "Evet",
    "Hayır",
    "Belki",
    "Olabilir",
    "Daha sonra tekrar sor",
    "İmkansız"
];






    var soru = args.join(' ');
  
    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
    

    if(!soru)
      return message.reply
      (new Discord.MessageEmbed().setColor("RANDOM").setTitle('Bir soru belirt. [Örn: !soru ]'))
    else message.channel.send(new Discord.MessageEmbed() .setColor("RANDOM") .setTitle(soru) .setDescription(cevap))  
      
      
      
      
    }
}
