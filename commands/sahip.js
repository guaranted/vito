module.exports = {
    name: 'sahip',
    description: 'command to mute members',
    execute(message, args){
      
      
      
      
      
      
      const Discord = require('discord.js');
const client = new Discord.Client();



    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor("36393F")
    .setTimestamp()
    .setDescription(' **İşte beni yapan şahsiyet** <@432150936534646805> ');
    message.channel.send(ozelmesajkontrol)

    }
}
