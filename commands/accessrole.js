const Discord = require ('discord.js')
module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous voulez avoir accès à la catégorie :')
        .setDescription("🗣️ : Communauté\n🖍️ : Graphisme\n🎮 : Mini Jeux")
        .setTimestamp()).then( message => {
            message.react("🗣️")
            message.react("🖍️")
            message.react("🎮")
        })
    },
    name: "accessrole.js"
}