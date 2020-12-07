module.exports = {
    name: 'zar',
    description: "Ping - Pong komutudur.",
    execute(message, args){


const {MessageEmbed} = require('discord.js')
const Discord = require("discord.js");
    let sonuç = [":game_die: 10 ",":game_die: 4 ",":game_die: 1 ",":game_die: 2",":game_die: 3",":game_die: 6 ", ":game_die: 7 ",":game_die: 8",":game_die: 9"];
    let result = Math.floor((Math.random() * sonuç.length));
    let zeka = new MessageEmbed()
    .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
    .addField("Zar atıldı!", sonuç[result]);
  
    message.channel.send(zeka);
}
    }
