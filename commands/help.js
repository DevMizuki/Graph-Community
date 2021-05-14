const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('__Liste des commandes__')
.setDescription('Afin d\'annoncer un bug au créateur du bot, veuillez utiliser la commande \`@report <votre texte>\`')
.setFooter('Bot de Graph\'Commmunity')
.addField('Commandes de Graphisme :', '@graph')
.addField('Commandes de Modération :', '@mod')
.addField('Commandes de Jeux :', '@play')
.addField('Mes données :', '@aboutme')
.setTimestamp())
},
    name : 'help'
}