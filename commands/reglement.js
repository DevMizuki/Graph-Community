const { MessageEmbed, MessageAttachment } = require('discord.js')
const reglees = new MessageAttachment('./assets/img/regles.png')
module.exports = {
    run: message => {
        message.channel.bulkDelete(1);
        const reglement = new MessageEmbed()
        .setTitle("Règlement du serveur discord Graph'Community")
        .setDescription("Voici le règlement divisé par article pour faciliter les warns :\n\n**__✍️  Dans les salons écrits :__**\n\n**1_** : Évitez de spam, hormis dans le salon prévu à cette effet.\n\n**2_** : Les propos racistes, sexistes, homophobes, vulgaires et tout ce qui tourne autour de la moquerie seront sévèrement sanctionné.\n\n**3_** : Les liens sont interdit sur le serveur en général hormis dans les salons pubs. (<#836236515700113448>)\n\n**4_** : Évitez tout sujet polémique. (Religion, politique…)\n\n**5_** : Les pseudonymes ou noms de jeux inappropriés (pornographie, publicité, insultes …) sont strictement interdits. Ayez également un pseudonyme facile à mentionner.\n\n**6_** : Il est strictement interdit de mentionner la direction. Les mentions de rôles sont à éviter sauf en cas de nécessité. Privilégiez les mentions uniques.\n\n**7_** : La publicité n’est pas autorisée en message privé ou sur le serveur hormis dans les salons pubs. (<#836236515700113448>)\n\n**8_** : Prêtez attention aux noms et à la description des salon.\n\n**9_** : Les commandes se font uniquement via les salons <#805422531132784661> ou <#836243464362262608>, veuillez respecter le paterne en message épinglé !\n\n**__Si quelqu'un enfreint ces règles, vous pouvez nous le signaler via le salon <#836239381740126258>__**\n\n**__🔊  Dans les salons vocaux :__**\n\nIl est interdit d'avoir des propos racistes ou pouvant vexer la personne et il est interdit de souffler dans son micro !")
        .setColor('RANDOM')
        .attachFiles(reglees)
        .setImage("attachment://regles.png")
        message.channel.send('@everyone')
        message.channel.send(reglement).then(message => { message.react("<a:ak412:807978148914266153>") })
    },
    name: 'reglement'
}