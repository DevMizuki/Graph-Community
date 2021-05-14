const Discord = require('discord.js')
 
module.exports = {
    run: message => {

        var imagesURL=["https://fr-minecraft.net/upload/wallpapers/images/fr-minecraft_wallpaper_HNHV.png",
        "https://www.liste-serveurs-minecraft.org/wp-content/uploads/2017/06/fond.jpg",
        "https://fr-minecraft.net/upload/wallpapers/images/fr-minecraft_wallpaper_CYZW.png",
        "https://www.minecraft-france.fr/wp-content/uploads/2020/02/2020-02-05_17.56.13.png",
        "https://static1-fr.millenium.gg/articles/3/13/22/43/@/34419-minecraft-vignette-wallpaperv2-article_m-1.jpeg",
        "https://hellominecraft.fr/images/screenshots/wall-hellominecraft-foret.png",
        "https://www.minecraft-france.fr/wp-content/uploads/2016/12/minecraft_wallpaper__1___lightflarewallpapers_by_lightflarewallpapers-danuqil.png",
        "https://a-static.besthdwallpaper.com/paysage-minecraft-fond-d-ecran-6987_L.jpg",
        "https://img.generation-nt.com/minecraft-xbox-one-x_01647930.jpg",
        "https://robinsnestfurnitureandmore.com/pic/9651222_full-fond-d-ecran-wallpaper-1920x1080-gratuit-minecraft-best-63-minecraft-backgrounds-on-hipwallpaper-awesome-minecraft.jpg",
        "https://i.pinimg.com/originals/83/c5/46/83c5462d26d463d01e25fee097f74bf3.jpg",
        "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/03603_800x480.jpg",
        "https://image.noelshack.com/fichiers/2017/24/1/1497226559-img-20170612-021401.jpg",
        "https://i0.wp.com/www.thegreatpearler.com/wp-content/uploads/2020/06/671984c63217a05d2adf3a6591d29f2b.jpg",
        "http://minecraft-aventure.com/wp-content/uploads/2014/06/fond-d-%C3%A9cran-minecraft-plage.png",
        "https://www.minecraft-france.fr/wp-content/uploads/2011/06/flat-world_53868.jpg"]
  
  var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
  var urlChoisie=imagesURL[nombreRandom];

        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Fond Minecraft')
            .setColor('RANDOM')
            .setImage(urlChoisie)
            .setFooter('Bot de Graph\'Commmunity')
            .setTimestamp())
    },
    name: `fondmc`
}