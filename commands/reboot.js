module.exports = {
    name: 'reboot',
    description: 'command to mute members',
    execute(message, args){
      
      process.exit();
      console.log('Bot yeniden başlıyor')
    }
}
