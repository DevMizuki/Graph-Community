const Discord = require ('discord.js')
module.exports = {
  run: async(message, args) => {
    if (!args[0]) return message.channel.send("Indique le membre que tu veux gifler !");
        var victime=message.content.split(" ").splice(1).join(" ");
        var mentionvictime = " a giflé" + victime



        var imagesURL=["https://i.pinimg.com/originals/b2/46/3d/b2463d7aadccc927bb89b5e8a95829cf.gif",
        "https://i.pinimg.com/originals/b1/8d/31/b18d310a12eae144562372a165ecfff0.gif",
        "http://pa1.narvii.com/5794/71b24d7001e8c36fcae8b745352c182a5b10b3d9_hq.gif",
        "http://ekladata.com/J_ynTaRgJDCP0ulrVHMS2N-6--8.gif",
        "https://risibank.fr/cache/stickers/d2196/219610-full.gif",
        "https://i.gifer.com/UwmX.gif",
        "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
        "https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif",
        "https://i.pinimg.com/originals/3b/3e/91/3b3e91c1de2aeece373c8831da03cd2e.gif",
        "https://i.kym-cdn.com/photos/images/original/001/040/951/73e.gif",
        "https://i.gifer.com/B2Sm.gif"
        ]
var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
var urlChoisie=imagesURL[nombreRandom];



        message.channel.send(new Discord.MessageEmbed()
.setTitle('__**Baffe**__')
.setColor('RANDOM')
.setDescription(message.author.username + mentionvictime)
.setThumbnail("https://i.skyrock.net/7831/9467831/pics/195308919_small.jpg")
.setFooter('Bot de Graph\'Commmunity')
.setImage(urlChoisie)
.setTimestamp())
},
    name : 'slap'
}