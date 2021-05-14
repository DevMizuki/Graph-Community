const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://cdn130.picsart.com/300564733276211.png?type=webp&to=min&r=640",
        "https://cdn130.picsart.com/311809718031211.png?type=webp&to=min&r=640",
        "https://www.pngarts.com/files/10/Fortnite-Render-Game-PNG-Image-Background.png",
        "https://skin-tracker.com/images/fnskins/featured/7f.png",
        "https://www.pngarts.com/files/10/Fortnite-Render-Transparent-Image.png",
        "https://cutewallpaper.org/21/dynamo-fortnite/Fortnite-Dynamo-Skin-Outfit-PNGs-Images-Pro-Game-Guides.png",
        "https://skin-tracker.com/images/fnskins/featured/729f.png",
        "https://www.pngarts.com/files/10/Fortnite-Render-PNG-Transparent-Image.png",
        "https://cdn2.unrealengine.com/Fortnite%2Fredeem-code%2FRedeemACode_MechTeamLeader-%281%29-2617x3834-4430f980bb4b3a49892c9a06ef706809c8236574.png",
        "https://cdn130.picsart.com/337622036034211.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Render Fortnite')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `renderfn`
    }
