const Discord = require ('discord.js')
module.exports = {
    run: async(message, args) => {
      if (!args[0]) return message.channel.send("Indique la suggestion que tu veux faire...")
        var suggestion=message.content.split(" ").splice(1).join(" ");
        

        message.channel.send(new Discord.MessageEmbed()
.setTitle('__Suggestion__')
.setColor('RANDOM')
.setDescription("Suggestion de"+message.author.username+"\nIl propose :\n"+"**"+suggestion+"**")
.setThumbnail("")
.setFooter('Bot de Graph\'Commmunity')
.setTimestamp())
},
    name : 'sugg'
}