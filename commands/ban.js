module.exports = {
    name: 'ban',
    description: "Ping - Pong komutudur.",
    execute(message, args){
       const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`Başarı ile banladım üyeyi! ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
          if(member.id === "771674804909637632") return message.reply('Beni banlayamazsın :)')
      if(member.id === message.author.id) return message.reply('Kendini banlayamazsın!')
      if(member.id === "432150936534646805") return message.reply('Sahibi banlayamazsın.')
          
          
            message.reply('Üyeyi banlayamadım./Benden daha yüksek bir rolü olabilir.');
          
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Üyeyi bulamadım");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Banlamam için birini etiketlemen lazım!");
    }
  }
}
