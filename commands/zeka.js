module.exports = {
    name: 'zeka',
    description: "Ping - Pong komutudur.",
    execute(message, args){


const {MessageEmbed} = require('discord.js')
const Discord = require("discord.js");
    let sonuç = ["``%10``\nSen aptalsın senden olmaz. ","``%20``\nYok sen hiç uğraşma","``%40``\nYaani karar veremedim ","``%60``\nSen biraz zekisin","``%80``\nSen zekiliğin vücut bulmuş halisin. ","``%100``\nSen neden hala burdasın nobel için çalışmalarına devam etmen lazım! "];
    let result = Math.floor((Math.random() * sonuç.length));
    let zeka = new MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField("Aptal mısın Zeki mi?", sonuç[result]);
  
    message.channel.send(zeka);
}
    }
