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
.setTitle('Conditions Partenariat')
.setColor('RANDOM')
.setDescription("Voici les conditions de Partenariat :\n→ Avoir minimum 200 membres\n→ Avoir au moins un thème en commun avec notre serveur.\n\nLes mentions :\n→ entre 200 et 500 membres : aucune mention\n→ Entre 500 et 1500 membres : Notif Partenariat\n→ 1500 membres et plus : @everyone.")
.setImage('https://media.discordapp.net/attachments/798928215271800842/833681937385652264/1610295255316.jpg')
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `partenariatconditionsbykirua`
    }