const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://aidenlafrance.files.wordpress.com/2020/09/amonguscyan.png",
        "https://mystickermania.com/cdn/stickers/games/among-us-lime-character-dum-512x512.png",
        "https://www.citypng.com/public/uploads/preview/-41605745380szz5tsoxrc.png",
        "https://www.nawpic.com/media/2020/among-us-character-nawpic-4-500x380.png",
        "https://www.webstickersmuraux.com/fr/img/amus024-png/folder/products-detalle-png/autocollants-among-us-picachu-pokemon.png",
        "https://i.pinimg.com/originals/e7/f0/f2/e7f0f2d5dba1eb2b02c4567315fb5926.png",
        "https://www.jeumobi.com/wp-content/uploads/2021/03/sheriff-among-us.png",
        "https://cdn.iconscout.com/icon/free/png-256/red-among-us-3218512-2691060.png",
        "https://i.pinimg.com/originals/97/a8/e9/97a8e961cf6822f718d060bda2bfb26a.png",
        "https://cqfd.univ-lyon1.fr/wp-content/blogs.dir/63/files/2021/03/93f280a32e61c78a28e9178d3ed8c16a.png",
        "https://steamcdn-a.akamaihd.net/steam/apps/945360/extras/steam_AboutImpostor.png?t=1542387642",
        "https://wonder-day.com/wp-content/uploads/2020/10/wonder-day-among-us-26.png",
        "https://cdn.custom-cursor.com/packs/3040/among-us-impostor-of-the-vent-pack.png",
        "https://www.jeumobi.com/wp-content/uploads/2020/10/among-us-logo.png",
        "https://www.webstickersmuraux.com/fr/img/amus027-png/folder/products-detalle-png/autocollants-among-us-blastoise-pokemon.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Render AmongUS')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `renderamg`
    }
