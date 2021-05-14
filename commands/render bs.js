const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["https://i.pinimg.com/originals/79/45/e1/7945e14e70bdfc2a5704a9d4b31966fd.png",
        "https://i.pinimg.com/originals/54/02/5b/54025b5f4bd07ae619f8ae32a6edae52.png",
        "https://wonder-day.com/wp-content/uploads/2020/06/wonder-day-brawl-stars-png-69-855x1024.png",
        "https://mir-s3-cdn-cf.behance.net/projects/404/c71999102725457.Y3JvcCwxMjA1LDk0Myw1NDYsNDQ.png",
        "https://cdn141.picsart.com/330452007093211.png",
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2019/02/eugenio-brawler-3d-render-brawl-stars.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/5e41da102725457.5ff9c9d9c2d47.png",
        "https://cdn131.picsart.com/330451443103211.png?type=webp&to=min&r=240",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/26642a102725457.5ff9c9d9c3c06.png",
        "https://cdn141.picsart.com/330112021077211.png?type=webp&to=min&r=1280",
        "https://www.chillbs.com/wp-content/uploads/2020/09/trixie-colette-skin.png",
        "https://www.brawlstarsdicas.com.br/wp-content/uploads/2019/05/bibi-brawler-render-3d-personagem.png",
        "https://gemmes-brawlstars.com/brawl-stars/img/render1.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Render Brawl Stars')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `renderbs`
    }
