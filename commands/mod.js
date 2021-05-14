const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('__Liste des commandes__')
.setFooter('Bot de Graph\'Commmunity')
.addField('@kick', 'Expulser un membre')
.addField('@ban', 'Bannir un membre')
.addField('@warn', 'Avertir un membre')
.addField('@unwarn', 'Retirer un avertissement à un membre \`@unwarn @membre <numéro du warn>\`')
.addField('@infractions', 'Voir les avertissements d\'un membre')
.addField('@clear', 'Effacer des messages')
.addField('@server-info', 'Voir les informations du serveur')
.addField('@user-info', 'Voir les informations d\'un utilisateur')
.addField('@pdp @...', 'Voir la photo de profil d\'un membre du serveur')
.setTimestamp())
},
    name : 'mod'
}