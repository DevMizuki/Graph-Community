const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('__Liste des commandes__')
.setFooter('Bot de Graph\'Commmunity')
.addField('Renders : ', '@renderbs : render brawl stars\n@renderfn : render fortnite\n@rendermc : render minecraft\n@renderamg : render among us\n@render.manga : render manga')
.addField('Fonds :', '@fondbs : fond brawl stars\n@fondfn : fond fortnite\n@fondmc : fond minecraft\n@telefond : fond d\'écran mobile\n@fond.neutre : fond neutre')
.addField('Contours', '@contours\n@cercles')
.addField('Effets', '@particules\n@flammes\n@degrade.color : dégradé de couleur')
.setTimestamp())
},
    name : 'graph'
}