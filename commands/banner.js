const {MessageEmbed} = require('discord.js')
module.exports = {
    name: 'banner',
    description: "Ping - Pong komutudur.",
    execute(message, args){
 
    
    const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://dummyimage.com/2000x500/33363c/ffffff&text=${yazi}`
  .replace(' ', '+')

  
  const embed = new MessageEmbed()
  .setTitle("Banner!")
  .setColor("#2ECC71")
  .setImage(linqo)
  .setFooter('Banner Oluşturuldu!')
  message.channel.send(embed)
    
    
    
    
    
    
    
    
    }
}
