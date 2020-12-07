module.exports = {
    name: 'mute',
    description: 'command to mute members',
    execute(message, args){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
             const  role = message.guild.roles.cache.find(r => r.name === "Susturulmuş");
            if(!role) return message.reply('Lütfen \`Susturulmuş\` adında bir rol oluşturun!')
      
           const member = message.mentions.members.first();
      if(member.id === "771674804909637632") return message.reply('Beni susturamazsın :)')
      if(member.id === message.author.id) return message.reply('Kendini susturamazsın!')
      if(member.id === "432150936534646805") return message.reply('Sahibi susturamazsın.')
            if (!member) return message.reply('Birini etiketle')
            member.roles.add(role).then(newMember => {
                message.channel.send(`${member} üyesi başarıyla susturuldu ` )
            })
    }
}
