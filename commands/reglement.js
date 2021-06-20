const { MessageEmbed, MessageAttachment } = require('discord.js')
const reglees = new MessageAttachment('./assets/img/regles.png')
module.exports = {
    run: message => {
        const reglement = new MessageEmbed()
        .setTitle("Règlement du serveur discord Graph'Community")
        .setDescription("Voici le règlement divisé par article pour faciliter les warns :\n**__Dans les salons écrits :__**\n**1_** : Évitez de spam, hormis dans le salon prévu à cette effet.\n**2_** : Les propos racistes, sexistes, homophobes, vulgaires et tout ce qui tourne autour de la moquerie seront sévèrement sanctionné.\n**3_** : Les liens sont interdit sur le serveur en général hormis dans les salons pubs.\n**4_** : Évitez tout sujet polémique. (Religion, politique…)\n**5_** : Les pseudonymes ou noms de jeux inappropriés (pornographie, publicité, insultes …) sont strictement interdits. Ayez également un pseudonyme facile à mentionner.\n**5_** : - Il est strictement interdit de mentionner la direction. Les mentions de rôles sont à éviter sauf en cas de nécessité. Privilégiez les mentions uniques.\n**5_** : La publicité n’est pas autorisée en message privé ou sur le serveur hormis dans les salons pubs.\n**6_** : Prêtez attention aux noms et à la description des salon.\n**__Si quelqu'un enfreint ces règles, vous pouvez nous le signaler via le salon <#836239381740126258>__**\n\n**__Dans les salons vocaux :__** : Il est interdit d'avoir des propos racistes ou pouvant vexer la personne et il est interdit de souffler dans son micro !")
        .attachFiles(reglees)
        .setImage("attachment://regles.png")

    },
    name: 'reglement'
}