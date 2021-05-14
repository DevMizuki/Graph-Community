const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('__Liste des commandes__')
.setFooter('Bot de Graph\'Commmunity')
.addField('Mes infos', '@user-info')
.addField('@pdp @...', 'Voir la photo de profil d\'un membre du serveur')

.setTimestamp())
},
    name : 'aboutme'
}