module.exports = {
    name: 'efkar',
    description: "Ping - Pong komutudur.",
    execute(message, args){
      
      const Discord = require('discord.js');
      const random = Math.floor(Math.random() * 100) + 1
      let { MessageEmbed } = require('discord.js')
      let embed = new MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`%${random} Efkarlısınız. `)
      
      message.channel.send(embed)
   } 
}
