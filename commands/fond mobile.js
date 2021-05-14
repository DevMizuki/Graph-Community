const Discord = require('discord.js')
 
module.exports = {
    run: message => {

        var imagesURL=["http://static.hitek.fr/img/actualite/2016/05/11/fond-d-ecran-geek-megaman.jpg",
        "http://www.mobilopix.com/_data/i/upload/2014/11/11/20141111221642-2bfc8018-me.jpg",
        "https://www.tout-pour-ton-mobile.com/wp-content/uploads/2012/04/2-1104041039340-L.jpg",
        "https://fond-ecran-manga.fr/wp-content/uploads/2020/10/vincentnoon-on-Twitter-jjba.png",
        "https://www.urban-comics.com/wp-content/uploads/2019/08/batman96.jpg",
        "https://i.pinimg.com/236x/68/a8/f0/68a8f08de9b1aa221002405a02eb9548.jpg",
        "https://i.pinimg.com/474x/ab/5b/c4/ab5bc441f1a852b4a50d6cfdd2d08505.jpg",
        "https://i.pinimg.com/564x/98/1a/26/981a26ab2e3ad40b5b7f7013707b8f70.jpg",
        "https://i.pinimg.com/originals/92/f9/a1/92f9a12c3f041d94693f67dfbcc28a33.jpg",
        "https://i.pinimg.com/originals/cc/05/ce/cc05ce8fdc74d8a1d043f8e13d70d0ad.jpg",
        "https://fond-ecran-manga.fr/wp-content/uploads/2020/05/Solo-leveling-450x850.jpg",
        "https://fond-ecran-manga.fr/wp-content/uploads/2020/04/1587553403_54_notitle-450x800.jpg",
        "https://fond-ecran-manga.fr/wp-content/uploads/2020/06/Imagens-do-anime-Naruto-450x799.jpg",
        "https://i.pinimg.com/736x/b0/7f/e2/b07fe2134c4e405cf50a36a22e8079da.jpg",
        "https://i.pinimg.com/736x/b0/1f/ff/b01fff466bdccde393d7f730a9a3b9ff.jpg",
        "https://i.pinimg.com/564x/7f/87/a2/7f87a2166f13a3be39cd19799473f52f.jpg",
        "https://cdn.statically.io/img/i.pinimg.com/originals/8d/fe/c7/8dfec710e311b266c779a893ac9632a4.jpg"
        ]
var nombreRandom=Math.round(Math.random()*(imagesURL.length-1))
  
var urlChoisie=imagesURL[nombreRandom];

      message.channel.send(new Discord.MessageEmbed()
          .setTitle('Fond d\'Ecran Mobile')
          .setColor('RANDOM')
          .setImage(urlChoisie)
          .setFooter('Bot de Graph\'Commmunity')
          .setTimestamp())
  },
  name: `telefond`
}