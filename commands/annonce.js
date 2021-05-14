const Discord = require ('discord.js')
module.exports = {
    run: message => {
message.channel.send('@everyone', new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Petite annonce : 01/05/2021')
.setDescription('Bonjour tout le monde,\nJ\'espère tout d\'abord que vous allez bien et que vous passez du bon temps sur Graph\'Community.\n\nJe tenais tout d\'abord a m\'excuser pour cette petite semaine d\'inactivité, j\'ai été déconnecté suite à un problème avec un ancien membre du staff.\n\nJe voudrais égalemement avoir votre avis sur le serveur : réagissez avec l\'émoji qui correspond à la note que vous donnez au serveur. Si la note est négative, <@747058719669616661> vous contactera.\n\nBon séjour sur le serveur !!')
.setImage('https://media.discordapp.net/attachments/798928215271800842/833681937385652264/1610295255316.jpg')
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
    name : 'annonce'
}