const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name: 'kedi',
    description: 'command to mute members',
    execute(message, args){
      
      
      
       
  
      
      
      
      
   

const resim = ['https://media.tenor.com/images/6b9784a001c9964a2c5a64e9db078594/tenor.gif',

'https://media1.tenor.com/images/8ab88b79885ab587f84cbdfbc3b87835/tenor.gif?itemid=15917800' ,

'https://media1.tenor.com/images/abe71f1bb871b5e473ea275fbad92aa2/tenor.gif?itemid=8673610' ,

'https://media1.tenor.com/images/46345e9b039e0686d27f2e32476f5b99/tenor.gif?itemid=9605663' ,

'https://media.tenor.com/images/043a3299edb9161b14a71b87afacf54f/tenor.gif' ,

'https://media.tenor.com/images/47b81948be5023555549c01d88ae3289/tenor.gif',
               
'https://media.tenor.com/images/bb33cc1eaafa266ac1092ecff7c1c85d/tenor.gif',

    'https://media.tenor.com/images/a8e5112749db6a50afab81a4e7258d20/tenor.gif',
               
               'https://media.tenor.com/images/a8e5112749db6a50afab81a4e7258d20/tenor.gif',
               'https://media.tenor.com/images/95fadce08619136ec90dc820aaf405a1/tenor.gif',
               'https://media.tenor.com/images/7d03adfffcc15f5491e2031d06fde73b/tenor.gif'
               
]
    
   message.channel.send(

  new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle("Kediii")

  .setImage(resim[Math.floor(Math.random() * resim.length)])
  
  

  .setTimestamp()

  )

}
    
    
    
    
    
    }
