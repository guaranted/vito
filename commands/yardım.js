
module.exports = {
    name: 'yardım',
    description: "Ping - Pong komutudur.",
    execute(message, args){
      
let Discord = require('discord.js')
let {MessageEmbed} = require('discord.js')
  const berke = "Komut "  + message.author.username + " tarafından çalıştırıldı";
  const karpuz =  message.author.displayAvatarURL({dynamic: true});

let prefix = '!'
let embed = new MessageEmbed()
.setAuthor(message.member.displayName)
.setColor("RANDOM")
.setTitle('Komutlar')
.setDescription(`:white_small_square: | Moderasyon Komutları.\n :white_small_square: | Genel Komutlar.\n :white_small_square: | Eğlence Komutları.`)
.setFooter(berke, karpuz)
message.channel.send(embed)
      





    }
}
