const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Récap Réunion du 22/05/2021")
        .setColor("RANDOM")
.setDescription("**→ Nouvel Effectif**\n\n**→** Maintenant les membres ne peuvent plus postuler pour devenir modérateur. Ils devront postuler pour devenir helpeur et passer au moins deux mois en tant que tel avant de pouvoir devenir modérateur\n\n**→** Enlever les perms de kick aux modos\n\n**→** Faire un bot anti spam\n\n**→** Minimum 1000messages pour devenir helpeur\n\n**Suggestions :**\n\n→ Grand tournoi avec une quinzaine de graphistes.\nEt il y aura 7 juges : 4 juges et 3 staff.\nLe 1er gagne 2 nitros, un compte adn ou crunchyroll et un rôle graphiste en diamant.\nLe 2e gagne 1 nitro et un rôle graphiste en or.\n\n→ Trailer (coucours avec  1 monteur, 1 dessinateur et un graphiste)\n\n→ + de comptes (TikTok, insta, etc....)pour le serveur")
.setImage("https://www.concordiafootballclubbellegarde.fr/media/uploaded/sites/3730/actualite/59b8355add6f4_meeting1.jpg")
.setTimestamp())
    },
    name: "reunionrecap.js"
}
