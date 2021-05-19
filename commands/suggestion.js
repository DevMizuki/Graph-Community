const Discord = require ('discord.js')
module.exports = {
    run: async(message, args) => {
      if (!args[0]) return message.channel.send("Indique la suggestion que tu veux faire...")
        var suggestion=message.content.split(" ").splice(1).join(" ");
        const user=message.author
        const salaude=836242641204543558

        const EMBEDSUG=new Discord.MessageEmbed
        EMBEDSUG.setTitle('__Suggestion__')
        EMBEDSUG.setColor('RANDOM')
        EMBEDSUG.setDescription("Il propose de :\n"+"**"+suggestion+"**")
        EMBEDSUG.setThumbnail(user.displayAvatarURL())
        EMBEDSUG.setFooter('Suggestion de '+message.author.username)
        message.salaude.send(EMBEDSUG)

},
    name : 'sugg'
}
