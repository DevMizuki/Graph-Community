const Discord = require ('discord.js')
module.exports = {
    run: message => {
        let question=message.content.split(" ").splice(1).join(" ");
        if (question == "") {
            question = "***__Tu ne m'as pas dit qui :sob:__***"
          }
        let reponse=["Pierre", "Feuille", "Ciseaux"]
        var reponseChoisie=Math.round(Math.random()*(reponse.length-1))

message.channel.send(new Discord.MessageEmbed()
.setTitle('Pierre 💎 Feuille 📝 Ciseaux ✂️')
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setColor('RANDOM')
.setFooter('Bot de Graph\'Commmunity')
.addField("Tu as choisi", question)
.addField("Le Bot a choisi", reponse[reponseChoisie])
.setTimestamp())
},
    name : 'pfc'
}