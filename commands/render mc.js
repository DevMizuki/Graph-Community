const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://d3lkwj5yf9cdhp.cloudfront.net/2017/11/46096_2eaf075329098b0b505c90ab5dfe2f31.png",
        "https://i.pinimg.com/originals/69/ab/ba/69abbac5972fe84d8fcc8c1f883c621b.png",
        "https://d3lkwj5yf9cdhp.cloudfront.net/2017/06/31974_3ff6ea621a152e65b62ff712e64bad5f.png",
        "https://i.pinimg.com/originals/cf/25/68/cf2568e6d8dcd620a542ac24968972bb.png",
        "https://pbs.twimg.com/media/DUFi2AiX0AA96lE.png",
        "https://freepikpsd.com/wp-content/uploads/2019/10/render-minecraft-c4d-png-3.png",
        "https://d37b3blifa5mva.cloudfront.net/000_clients/751258/page/751258calkc6My.png",
        "https://clipground.com/images/minecraft-skin-render-png-5.png",
        "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1920,f_auto,q_auto/1195354/allken_nknrwn.png",
        "https://i.imgur.com/snxnVCV.jpg",
        "https://pngimg.com/uploads/minecraft/minecraft_PNG88.png",
        "https://pe56d.s3.amazonaws.com/o_1ebfabh2v1dog1i9rjtoq7r1p0om.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Render Minecraft')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `rendermc`
    }
