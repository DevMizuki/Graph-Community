const Discord = require('discord.js')
module.exports = {
    run: (message, args, client) => {
        message.channel.bulkDelete(1);
        if (!args[0]) return message.channel.send("<@" + message.author.id + ">" + " Indique dequel membre tu veux voir la photo de profil !");
        const member = message.mentions.members.first() || message.member
        const user = message.content.split(" ").splice(1).join(" ");
        message.channel.send(new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Voici la photo de profil de' + user)
        .setImage(member.user.displayAvatarURL()))
},
name: 'pdp',
guildOnly: true
}