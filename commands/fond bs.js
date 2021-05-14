const Discord = require('discord.js')
 
module.exports = {
    run: message => {

        var imagesURL=["https://i.pinimg.com/originals/b2/79/4b/b2794b462cb29816b5c4bd13b49a0847.jpg",
        "https://www.papyswarriors.com/medias/images/showdown-event-brawl-stars.jpg",
        "https://www.papyswarriors.com/medias/images/heist-event-brawl-stars.jpg",
        "https://assets.puzzlefactory.pl/puzzle/257/891/original.jpg",
        "https://i.pinimg.com/originals/1e/62/c0/1e62c0a6c8ab1ac295a9748a3c4731d4.jpg",
        "https://i.pinimg.com/originals/f9/85/a4/f985a4758b6d05e7c9c37beb11dbe1b9.jpg",
        "https://vignette.wikia.nocookie.net/brawlstars/images/5/50/Wiki-background/revision/latest?cb=20190722175026&path-prefix=tr",
        "https://i.redd.it/gmkmfcpvx4s31.png",
        "https://img.melodylinhart.com/350-_-197-_-70-_-www.brawl-stars.su/wp-content/uploads/2020/09/fon-1024x576.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/fee55773845205.5c179e8691f91.jpg",
        "https://i.redd.it/puwuatgbq4i51.jpg",
        "https://i.pinimg.com/originals/71/2d/5f/712d5f409974e20a741422f3bff03c7d.jpg",
        "https://cutewallpaper.org/21/brawl-stars-background/ArtStation-Brawl-Stars-Environment-Art,-Tim-Kaminski-in-.jpg",
        "https://i.pinimg.com/originals/3c/eb/5d/3ceb5da1108c8f536f6289ce6b8e446f.jpg",
        "https://i.pinimg.com/originals/af/8c/18/af8c18ba0f83fd65adf0256364af5ac0.jpg",
        "https://i.redd.it/6vxc9obey8831.jpg"]
  
  var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
  var urlChoisie=imagesURL[nombreRandom];

        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Fond Brawl Stars')
            .setColor('RANDOM')
            .setImage(urlChoisie)
            .setFooter('Bot de Graph\'Commmunity')
            .setTimestamp())
    },
    name: `fondbs`
}