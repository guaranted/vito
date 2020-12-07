module.exports = {
    name: 'lock',
    description: 'command to mute members',
    execute(message, args){

      let Discord = require('discord.js')
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!`);
    
    message.channel.owerwritePermissions({ 'SEND_MESSAGES': false }, 'Kanal kilitlendi. Yetkili:'+message.author.tag);
    message.channel.send('Komut başarılı!')
    
    }
  
  
  
  
  
  
  
  
  
  
}
