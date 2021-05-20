const Discord = require ('discord.js')
module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous êtes :')
        .setColor("RANDOM")
        .setDescription("✏️ : Dessinateur\n💻 : Monteur\n📹 : Youtubeur\n📱 : Graphiste")
        .setTimestamp()).then( message => {
            message.react("✏️")
            message.react("💻")
            message.react("📹")
            message.react("📱")
        });
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous êtes :')
        .setDescription("👦 : Un homme\n👩 : Une femme\n👶 : - de 14 ans\n🧑 : 14 - 18 ans\n👴 : + de 18 ans")
        .setColor("RANDOM")
        .setTimestamp()).then(message => {
            message.react("👦")
            message.react("👩")
            message.react("👶")
            message.react("🧑")
            message.react("👴")
        });
        message.channel.send("<a:fleche:834204342013263883> <#844888530866143232>")
    },
    name: "passionsrole.js"
}