const Discord = require("discord.js")

module.exports = {
    run: message => {
        message.channel.send("***Version sans nitro***")
        message.channel.send("```Hey @everyone :wave: , je vais te présenter Graph' Community (alias GC) :\n\n\n:fire:┃C\'est un serveur propre, soigné et complet !\n\n:crown:┃Le serveur est basé sur l\'art et le communautaire !\n\n:paintbrush: :┃Tu pourras montré tes chefs d’œuvres, et avoir des conseils !\n\n:shopping_cart:┃Tu pourras passer des commandes auprès de graphistes compétant, payant ou gratuit !\n\n:speaking_head:┃Tu rencontreras des personnes avec qui discuter de tes passions ou autres !\n\n:family_man_girl_girl: ┃Une communauté croissante !\n\n:smile_cat: ┃Une bonne ambiance et les personnes son actives !\n\n:hammer_pick: ┃Les membres du staff son chill et à l\'écoute.\n\n:tada:┃Il y a très souvent des évents.\n\n:gift: ┃Beaucoup de giveaway (souvent nitro) !\n\nAlors qu\'est que tu attends pour nous rejoindre ? :timer:  Viens t\'amuser !\nhttps://discord.gg/EWT3xrZRng```")
    },
    name: "pub"
}