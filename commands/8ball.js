const Discord = require ('discord.js')
module.exports = {
    run: message => {
        let question=message.content.split(" ").splice(1).join(" ");
        if (question == "") {
    question = "Tu ne m'as pas posé de question, pourtant je sais tout  :sob:"
  }
  question = question
        let reponse=["Oui, c'est certain !!", "Non, c'est impossible !!", "Hmmm... Je ne sais pas"]
        var reponseChoisie=Math.round(Math.random()*(reponse.length-1))
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setThumbnail("https://image.jimcdn.com/app/cms/image/transf/dimension=360x10000:format=jpg/path/s0c25406acce04830/image/ie0c18386b351c928/version/1371899983/image.jpg")
.setFooter('Bot de Graph\'Commmunity')
.addField(question, reponse[reponseChoisie])
.setTimestamp())
},
    name : '8ball'
}