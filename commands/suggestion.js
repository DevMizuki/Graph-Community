const Discord = require ('discord.js')
module.exports = {
    run: async(message, args) => {
      if (!args[0]) return message.channel.send("Indique la suggestion que tu veux faire...")
        var suggestion=message.content.split(" ").splice(1).join(" ");
        const user=message.author
        
        member.guild.channels.cache.get(config.greeting.sug).send("**__Suggestions de "+ message.author.username+"__**\n"+ suggestion)


},
    name : 'sugg'
}
