const {MessageEmbed} = require('discord.js')
const Discord = require('discord.js')
module.exports = {
    name: 'pat',
    description: 'command to mute members',
    execute(message, args){
      
      
      
       if (!message.mentions.users.first()) return message.reply("Birini etiketlemelisin"); //if no one is mentions , lets reply as
    if (message.mentions.users.first().id === message.author.id) return message.channel.send('Kendini patlayamazsın');
      
      
      
      
   

const resim = ['https://media1.tenor.com/images/8c1a53522a74129607b870910ac288f9/tenor.gif?itemid=7220650',

'https://media1.tenor.com/images/219d67742b8ce28ea8fb2701c06d7949/tenor.gif?itemid=16770818' ,

'https://media1.tenor.com/images/f79a9ec48bde0e592e55447b17ecfbad/tenor.gif?itemid=8053566' ,

'https://media1.tenor.com/images/83eee1df66a791ce6057fc80c026f11a/tenor.gif?itemid=6332507' ,

'https://media1.tenor.com/images/88ff65d668f92f6d953dbffcbed2be5f/tenor.gif?itemid=4953911' ,

'https://media1.tenor.com/images/857aef7553857b812808a355f31bbd1f/tenor.gif?itemid=13576017',
               
'https://media.tenor.com/images/1d37a873edfeb81a1f5403f4a3bfa185/tenor.gif',

    'https://media.tenor.com/images/89440731dab7b31691c9e035b86c5e62/tenor.gif',
               
               'https://media.tenor.com/images/c89ad4fe61f9a95fc85a13b27c75c5b6/tenor.gif',
               'https://media.tenor.com/images/fb3d47da964bd177d12a37488474a65f/tenor.gif',
               'https://media.tenor.com/images/31c91535d1ab6f675c93ce5dfd50c12a/tenor.gif'
               
]
    
   message.channel.send(

  new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle("Pat")

  .setImage(resim[Math.floor(Math.random() * resim.length)])
  
  

  .setTimestamp()

  )

}
    
    
    
    
    
    }


      
      
      
      
      
      
      
      
      
      
      
      
    
