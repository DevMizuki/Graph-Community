const Discord = require('discord.js')
 
module.exports = {
    run: message => {

        var imagesURL=["https://c4.wallpaperflare.com/wallpaper/585/347/731/anime-scenic-wallpaper-preview.jpg",
"https://cdn.statically.io/img/2.bp.blogspot.com/-TRiBWTjJdP8/XExwu25CGcI/AAAAAAAABas/LgpoRYKwIO8SKK80epHArlVaSPufQeESACKgBGAs/w0/anime-moon-landscape-horizon-46-4K.jpg",
"https://3.bp.blogspot.com/-uHUf5IY7zO8/XEFutkOdgiI/AAAAAAAAEtc/h2_n3SrADcUSsOaJ2yBDhZSd8px0Ch8BACHMYCw/s1600/anime-scenery-wallpaper-free-desktop-hd-wallpapers-desktop.jpg",
"https://wallpaperaccess.com/full/1320758.jpg",
"https://wallpaperaccess.com/full/349969.jpg",
"https://cutewallpaper.org/21/blue-anime-background/Anime-Background-Scenery-1920x1080-Thecharmingstyle.com.jpg",
"https://i.pinimg.com/originals/de/4b/56/de4b56a4bda05c5594aa5d8f2baeaa41.jpg",
"https://wallpaperaccess.com/full/628301.jpg",
"https://wallpaperaccess.com/full/490267.jpg",
"http://cache.desktopnexus.com/thumbseg/1929/1929620-bigthumbnail.jpg",
"https://cutewallpaper.org/21/purple-anime-wallpaper/Anime-Fantasy-Wallpaper-74-images-.jpg",
"https://i.pinimg.com/originals/35/a7/13/35a71369bea34cf34cd2e199bd3435a7.jpg",
"https://i.pinimg.com/736x/3f/5f/84/3f5f84ab7ab689705154b4e6a4dde4f8.jpg",
"https://i.pinimg.com/originals/b9/4c/79/b94c792332aa844a5f2584bae7d0b00e.jpg",
"https://i.pinimg.com/originals/9f/a6/1a/9fa61a172279d966e1ba897ebd8ffff2.jpg"]
var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
var urlChoisie=imagesURL[nombreRandom];

      message.channel.send(new Discord.MessageEmbed()
          .setTitle('Fond Neutre')
          .setColor('RANDOM')
          .setImage(urlChoisie)
          .setFooter('Bot de Graph\'Commmunity')
          .setTimestamp())
  },
  name: `fond.neutre`
}