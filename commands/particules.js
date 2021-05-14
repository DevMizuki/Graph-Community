const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://www.docutechgh.com/wp-content/uploads/2019/03/splatter.png",
        "https://quarizmi.com/blog/wp-content/uploads/2017/03/glittery-sparkles-pink.png",
        "https://cdn140.picsart.com/289414978042211.png?type=webp&to=min&r=640",
        "https://www.emcap.com/images/decor-dot.png",
        "https://www.360fly.com/skin/frontend/b-responsive/360fly/images/elements/dirt/back-spray-1.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Particules')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `particules`
    }
