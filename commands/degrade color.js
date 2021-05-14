const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://thumbs.dreamstime.com/b/pastel-multi-color-gradient-background-pastel-multi-color-gradient-background-simple-form-blend-color-spaces-as-139472671.jpg",
        "https://www.publicdomainpictures.net/pictures/280000/velka/gradient-colors-blur-background.jpg",
        "https://st4.depositphotos.com/1000435/28246/v/950/depositphotos_282465378-stock-illustration-blur-pastel-color-gradient-background.jpg",
        "https://i1.wp.com/css-tricks.com/wp-content/uploads/2017/09/linear-gradient.png?fit=1800%2C800&ssl=1"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Dégradé de couleur')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `degrade.color`
    }
