const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        
        var blagues=["Pourquoi les orphelins ont tous des Iphone X ?\n||Parce qu'il n'y a pas de bouton home||",
        "Pourquoi les orphelins n'ont ils pas Snapchat ?\n||Parce qu'il faut l'accord parental||",
        "Quelle mamie fait peur aux voleurs ?\n||Mamie Traillette (Ma mitraillette)||",
        "Pourquoi est-ce c'est difficile de conduire dans le Nord ?\n||Parce que les voitures arrêtent PAS DE CALER (Nord Pas-de-Calais)||",
        "Pourquoi est-ce qu'on met tous les crocos en prison ?\n||Parce que les crocos dealent (crocodiles)||",
        "Pourquoi est-ce que les vêtements sont toujours fatigués quand ils sortent de la machine ?\n||Parce qu’ils sont léssivés||",
        "Que se passe-t-il quand 2 poissons s'énervent ?\n||Le thon monte (le ton monte)||",
        "Quel fruit est assez fort pour couper des arbres ?\n||Le ci-tron||",
        "Quel est le jambon que tout le monde déteste ?\n||Le sale ami (le salami)||",
        "Que fait un cendrier devant un ascenseur ?\n||Il veut des cendres (il veut descendre)||",
        "Que dit une imprimante dans l'eau ?\n||J’ai papier (j'ai pas pied)||",
        "Comment est-ce que les abeilles communiquent entre elles ?\n||Par e-miel (pas e-mail)||",
        "Quelle est la fée que les enfants détestent?\n||La fée C (la féssée)||",
        "Que fait une vache quand elle ferme les yeux ?\n||Du lait concentré||",
        "Dans quel pays ne bronze-t-on pas du nez ?\n||Au Népal (au nez pâle)||",
        "Comment appelle-t-on un chat qui va dans l'espace ?\n||Un chatellite||",
        "Que dit un informaticien quand il s'ennuie ?\n||Je me fichier||",
        "Quelle différence y a t'il entre une femme et un moustique?\n||Le moustique te fais chier que l'été||",
        "Quel est le point commun entre un professeur et un thermomètre ?\n||On tremble quand ils marquent zéro !||",
        "Vous connaissez l'histoire de l'armoire ?\n||Elle est pas commode...||",
        "A l'aéroport une très grande vedette est accueilli par des milliers de personnes. Elle demande aux policiers qui repoussent la foule :\n- Pourquoi vous faites ça ?\n- C'est pour des raisons de sécurité.\n- Sécurité ? Je ne voulais pas leur faire mal !",
        "Vous voulez que je vous raconte une histoire ?\nIl était une fois une tortue qui montait une colline...\nEt..??\nAttend laisse-lui le temps de monter !",
        "Quelle est la plus intelligente, la blonde, la rousse ou la brune ?\n||La rousse parce que c’est un dictionnaire.||"
        ]

var nombreRandom=Math.round(Math.random()*(blagues.length-1))

var blagueChoisie=blagues[nombreRandom];

message.channel.send(new Discord.MessageEmbed()
.setTitle(':joy: Blague :joy:')
.setColor('RANDOM')
.setImage("**" + blagueChoisie + "**")
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
name: `blague`
    }