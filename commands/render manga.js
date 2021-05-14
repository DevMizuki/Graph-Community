const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var imagesURL=["http://ekladata.com/CKKQNgPjX8r115XQWyKVmSxyF24.png",
        "http://ekladata.com/mVKyvn-tM9IVxSHd2zYJkCOtnq0.png",
        "https://i.pinimg.com/originals/96/4d/89/964d89935a4ff4042e905280119981be.png",
        "https://tugaleres.files.wordpress.com/2013/11/render_senou_natsuru_by_kurokami.png",
        "https://www.pngkey.com/png/full/111-1110658_naruto-render-manga-and-sasuke-et-itachi-uchiwa.png",
        "http://idata.over-blog.com/4/19/11/95/08/mdg-mangas-png-45464--2-.png",
        "https://i.skyrock.net/0080/85520080/pics/3119270363_1_3_y2GfUxpw.png",
        "http://ekladata.com/E8jCWM2ONLdmeMAx6dvL85e6m-c.png",
        "http://www.renders-dbz.com/_data/i/upload/2018/04/07/20180407235647-737a037e-me.png",
        "https://2img.net/r/hpimg11/pics/909880cutesmile.png",
        "https://i.pinimg.com/originals/80/0d/33/800d33f97cff8e8ba296e6d816e5cf14.png",
        "https://i.pinimg.com/originals/0d/0a/d8/0d0ad83820312bebe572c8c8912dfe6e.png",
        "https://i.pinimg.com/originals/a6/c7/e8/a6c7e8f635ac73ba85fa4d8a241e9c4f.png",
        "https://i.pinimg.com/originals/da/35/bf/da35bf6212e34642427abc04b62a29b4.png",
        "https://3.bp.blogspot.com/-YoLFhNXAwLw/WExOoR5vL-I/AAAAAAAAKl4/pMZx6SWX9LULq4Mq7nuMGO91fepg1dy2ACLcB/w0/render_21_sasuke_uchiha_by_usagihikari-d9ow88a.png",
        "https://i.pinimg.com/originals/23/26/15/232615a626121a8a149c363417740968.png",
        "https://cutewallpaper.org/21/naruto-hokage-pictures/SEVENTH-HOKAGE-NARUTO-UZUMAKI-BIJUU-MODE-by-.png"]

var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))

var urlChoisie=imagesURL[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle('Render Manga')
.setColor('RANDOM')
.setImage(urlChoisie)
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `render.manga`
    }
