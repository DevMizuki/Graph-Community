const Discord = require ('discord.js')
module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous Ãªtes :')
        .setColor("RANDOM")
        .setDescription("âï¸ : Dessinateur\nð» : Monteur\nð¹ : Youtubeur\nð± : Graphiste")
        .setTimestamp()).then( message => {
            message.react("âï¸")
            message.react("ð»")
            message.react("ð¹")
            message.react("ð±")
        });
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous Ãªtes :')
        .setDescription("ð¦ : Un homme\nð© : Une femme\nð¶ : - de 14 ans\nð§ : 14 - 18 ans\nð´ : + de 18 ans")
        .setColor("RANDOM")
        .setTimestamp()).then(message => {
            message.react("ð¦")
            message.react("ð©")
            message.react("ð¶")
            message.react("ð§")
            message.react("ð´")
        });
        message.channel.send("<a:fleche:834204342013263883> <#844888530866143232>")
    },
    name: "passionsrole.js"
}