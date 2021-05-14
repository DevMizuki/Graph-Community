const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://zopru1.webnode.fr/_files/200000027-4df454eef9/450/wGML9zz.png",
        "https://zopru1.webnode.fr/_files/200000028-9e20f9f186/450/oXYLskS.png",
        "https://zopru1.webnode.fr/_files/200000026-dede1dfdb5/450/1477084601895_orig.png",
        "https://zopru1.webnode.fr/_files/200000039-0878a0970b/450/blue-flame-png-hd-blue-fire-png-hd-1375.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Flammes')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `flammes`
    }
