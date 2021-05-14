const Discord = require ('discord.js')
module.exports = {
    run: async(message, args) => {
      if (!args[0]) return message.channel.send("Indique le membre que tu veux éliminer !");
        var mort=message.content.split(" ").splice(1).join(" ");
        var mentionvictime = " a tué" + mort
        var imagesURL=["https://i.pinimg.com/originals/40/49/b5/4049b559d6f08dc8ac5c174a53d109d4.gif",
        "https://i.gifer.com/QCOQ.gif",
        "https://i.skyrock.net/9007/89029007/pics/3193601105_1_6_r0LjoDbb.gif",
        "https://www.gifimili.com/gif/2018/02/lara-croft-et-ses-pistolets.gif",
        "https://www.gifservice.fr/img/gif-vignette-large/12f8f5954d1383a361629023ac4c1a63/25498-3d-lines-bands-3d-effects-humor-fun.gif"
        ]
var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
var urlChoisie=imagesURL[nombreRandom];



        message.channel.send(new Discord.MessageEmbed()
.setTitle('__**Crime**__')
.setColor('RANDOM')
.setDescription(message.author.username + mentionvictime)
.setThumbnail("https://img.wattpad.com/3784ef916e9c1466317c006e6040d4d915b38fc2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f56655f396964614a44796e4631413d3d2d3735383737333839372e313562316137363731386237633531633537363938363030333033322e676966")
.setFooter('Bot de Graph\'Commmunity')
.setImage(urlChoisie)
.setTimestamp())
},
    name : 'bang'
}