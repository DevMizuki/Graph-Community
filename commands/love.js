const Discord = require ('discord.js')
module.exports = {
  run: async(message, args) => {
    if (!args[0]) return message.channel.send("Indique le membre dont tu es amoureux !");
        var amoureuse=message.content.split(" ").splice(1).join(" ");
        var mentionvictime = " est amoureux de " + amoureuse
        
        
        var imagesURL=["https://i.pinimg.com/originals/af/03/40/af0340696d5e858c85db91a40f88540f.gif",
        "https://i.skyrock.net/8742/73448742/pics/3200547641_1_2_5nf0O6ze.gif",
        "https://data.whicdn.com/images/199257401/original.gif",
        "https://64.media.tumblr.com/f34fe7b01573743938f30c51d211227e/tumblr_oqgoupiCnF1slt45io1_500.gifv",
        "https://acegif.com/wp-content/uploads/anime-love-62.gif",
        "https://i.pinimg.com/originals/aa/bd/19/aabd195e0990b2e9b063936b81f20b46.gif",
        "https://i0.wp.com/i.pinimg.com/originals/42/ea/82/42ea82511a8053abdb0a1476973fb370.gif"]
var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
var urlChoisie=imagesURL[nombreRandom];



        message.channel.send(new Discord.MessageEmbed()
.setTitle('__Amour**__')
.setColor('RANDOM')
.setDescription(message.author.username + mentionvictime)
.setThumbnail("https://www.gif-maniac.com/gifs/55/54976.gif")
.setFooter('Bot de Graph\'Commmunity')
.setImage(urlChoisie)
.setTimestamp())
},
    name : 'love'
}