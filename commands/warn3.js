module.exports = {
    name: 'warn3',
    description: 'command to mute members',
    execute(message, args){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
             const  role = message.guild.roles.cache.find(r => r.name === "Uyarı 3");
            if(!role) return message.reply('Lütfen \`Uyarı 3\` adında bir rol oluşturun!')
      
           const member = message.mentions.members.first();
      if(member.id === "771674804909637632") return message.reply('Beni uyaramazsın :)')
      if(member.id === message.author.id) return message.reply('Kendini uyaramazsın!')
      if(member.id === "432150936534646805") return message.reply('Sahibi uyaramazsın.')
            if (!member) return message.reply('Birini etiketle')
            member.roles.add(role).then(newMember => {
                message.channel.send(`${member} üyesinin **3**. uyarısı verildi! ` )
            })
    }
}
