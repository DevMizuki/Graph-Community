const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://zopru1.webnode.fr/_files/200000012-3f4b84045b/450/ggg.png",
        "https://image.jimcdn.com/app/cms/image/transf/dimension=1920x400:format=png/path/s9230cf1cc5ebd4a0/image/i89dad50cfa7dd1a3/version/1562385015/image.png",
        "https://zopru1.webnode.fr/_files/200000021-390e83a0a9/450/Image2.png",
        "https://pngimage.net/wp-content/uploads/2018/05/contour-miniature-png-1.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Contours')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `contours`
    }
