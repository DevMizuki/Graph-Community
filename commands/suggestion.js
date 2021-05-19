const Discord = require ('discord.js')
module.exports = {
    run: async(message, args) => {
      if (!args[0]) return message.channel.send("Indique la suggestion que tu veux faire...")
        var suggestion=message.content.split(" ").splice(1).join(" ");
        const user=message.author
        const EMBEDSUG=new Discord.MessageEmbed

        member.guild.channels.cache.get(config.greeting.sug).send(EMBEDSUG)
        EMBEDSUG.setTitle('__Suggestion__')
        EMBEDSUG.setColor('RANDOM')
        EMBEDSUG.setDescription("Il propose de :\n"+"**"+suggestion+"**")
        EMBEDSUG.setThumbnail(user.displayAvatarURL())
        EMBEDSUG.setFooter('Suggestion de '+message.author.username)
},
    name : 'sugg'
}
