const Discord = require('discord.js')
 
module.exports = {
    run: message => {

        var imagesURL=["https://i.pinimg.com/originals/19/f1/99/19f1991ff678d594d622d5fcefcf9322.jpg",
        "https://www.actugaming.net/wp-content/uploads/2020/06/fortnite-fond-guide-wiki.jpg",
        "https://i.pinimg.com/originals/98/39/c2/9839c28c25861fe9aefc3a4de72670db.jpg",
        "https://i.pinimg.com/originals/a6/0e/ed/a60eedb0e39cf5edf58fc8e092beeb8f.jpg",
        "https://www.wallpapertip.com/wmimgs/15-155409_best-fortnite-wallpapers-hd-and-4-k-for.jpg",
        "https://d3isma7snj3lcx.cloudfront.net/optim/images/gallery/81/81019/fortnite-pc-90b66bba__427_300__center.png",
        "https://cosmo-games.com/wp-content/uploads/2019/10/Fortnite-Chapitre-2-saison-1-est-maintenant-disponible.jpg",
        "https://www.generation-game.com/wp-content/uploads/2019/03/point-le-plus-au-nord-fortnite-saison-8-defi-semaine-2-1024x576.jpg",
        "https://i.pinimg.com/564x/ed/a2/df/eda2dfd795eb4807dc5d6b45bc58f889.jpg",
        "https://a-static.besthdwallpaper.com/arbres-shifty-maison-4k-fortnite-fond-d-ecran-3840x2160-1220_54.jpg",
        "https://www.gamosaurus.com/wp-content/uploads/Fortnite/saison-12/defis/semaine-5/vignette-fortnite-saison-12-visiter-shipwreck-cove-yacht-flopper-pond-chapitre-2-saison-2-gamosaurus.jpg",
        "https://sm.ign.com/t/ign_fr/news/f/fortnite-t/fortnite-the-fourth-dimension-is-a-full-game-made-entirely-i_7767.h720.jpg",
        "https://image.jeuxvideo.com/medias-md/159886/1598862375-6794-capture-d-ecran.jpg",
        "https://www.numerama.com/content/uploads/2019/11/fortnite-game.jpg",
        "https://pbs.twimg.com/media/Dh-zzaFXUAAxjgK.jpg",
        "https://www.next-stage.fr/wp-content/uploads/2018/07/fortnite-carte-desert-1024x576.jpg",
        "https://i.ytimg.com/vi/aJsLLQvpiIE/maxresdefault.jpg",
        "https://www.actugaming.net/wp-content/uploads/2020/06/fortnite-saison-3-nouveaux-lieux-dits-scaled.jpg",
        "https://d3isma7snj3lcx.cloudfront.net/optim/images/gallery/81/81019/fortnite-pc-e1850eba__283_159.png"]
  
  var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
  var urlChoisie=imagesURL[nombreRandom];

        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Fond Fortnite')
            .setColor('RANDOM')
            .setImage(urlChoisie)
            .setFooter('Bot de Graph\'Commmunity')
            .setTimestamp())
    },
    name: `fondfn`
}