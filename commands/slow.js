module.exports = {
    name: 'slowmode',
    description: 'command to mute members',
    execute(message, args){

      const Discord = require('discord.js');
      const prefix = '!'
    
     if (!args[0])
      return message.channel.send(
        `Yavaş modu ayarlamam için bir sayı yazmalısın!`
      );
  if (args[0] > 1000) return message.channel.send("Slowmode en fazla 1000 olabilir.")
    if (isNaN(args[0])) return message.channel.send(`That is not a number!`);
    let reason = message.content.slice(
     prefix.length + 9 + args[0].length + 1
    );
    if (!reason) {
      reason == "Meşale Network!";
    }
    message.channel.setRateLimitPerUser(args[0], reason);
    message.channel.send(
      `Artık bu kanala **${args[0]}** saniyede bir mesaj yazılabilecek.`
    );
    
    
    }
}
