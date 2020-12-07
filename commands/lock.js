module.exports = {
    name: 'lock',
    description: 'command to mute members',
    execute(message, args){

      let Discord = require('discord.js')
      if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply(`Bu komutu kullanabilmek için **Kanalları Yönet** iznine sahip olmalısın!`);
    
      
 const role = message.guild.roles.find("name", "everyone ");

role.permissions.remove('SEND_MESSAGES')  
      
 
    message.channel.send('Komut başarılı!')
    
    }
  
  
  
  
  
  
  
  
  
  
}
  
  
