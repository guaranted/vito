module.exports = {
    name: 'isim',
    description: "Ping - Pong komutudur.",
    execute(message, args){

      
  const {MessageEmbed} = require('discord.js')
      const Discord = require('discord.js');
      
      
   if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
 
if(!kullanici) return message.channel.send(
new Discord.MessageEmbed()
.setColor('RED')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('Kişiyi Etiketlemelisin!'))
 
if(!isim) return message.channel.send(
new Discord.MessageEmbed()
.setColor('RED') //İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('Kişinin İsmini Yazmalısın'));
 
 
message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
 return message.channel.send(
 new Discord.MessageEmbed()
  .setColor('GREEN')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
  .setTitle('İsim Değiştirildi!')
  .addField('İsmi Değiştirilen', `${kullanici.username}`)
  .addField('Yeni İsmi', `${isim}`)
  .setFooter('İsim Başarıyla Değiştirildi' )
)}
      
      
      
    }
   
  
