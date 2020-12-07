module.exports = {
    name: 'icon',
    description: "Ping - Pong komutudur.",
    execute(message, args){


const {MessageEmbed} = require('discord.js')
const Discord = require("discord.js");

if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;
    const embed = new MessageEmbed()
        .setDescription("**SUNUCU ICONU**")
        .setImage(message.guild.iconURL())
        
    message.channel.send(embed);
      
    }
}


