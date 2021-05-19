const Discord = require ('discord.js')
module.exports = {
    run: async(message, args) => {
      if (!args[0]) return message.channel.send("Indique la suggestion que tu veux faire...")
        var suggestion=message.content.split(" ").splice(1).join(" ");
        const user=message.author

        message.channel.send(new Discord.MessageEmbed()
.setTitle('__Suggestion__')
.setColor('RANDOM')
.setDescription("Il propose :\n"+"**"+suggestion+"**")
.setThumbnail(user.displayAvatarURL())
.setFooter('Suggestion de '+message.author.username)
.setTimestamp())
},
    name : 'sugg'
}