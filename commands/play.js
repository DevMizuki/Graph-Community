const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('__Liste des commandes__')
.setFooter('Bot de Graph\'Commmunity')
.addField('8ball : ', '@8ball <votre question>')
.addField('@love :', 'Mentionnez la personne que vous voulez pour l\'embrasser')
.addField('@slap', 'Mentionnez la personne que vous voulez pour la giffler')
.addField('@bang', 'Mentionnez la personne que vous voulez pour la tuer')
.addField('@pfc <pierre, feuille ou ciseaux>', 'Pierre feuille ciseaux avec le bot')
.addField('@pdp @...', 'Voir la photo de profil d\'un membre du serveur')

.setTimestamp())
},
    name : 'play'
}