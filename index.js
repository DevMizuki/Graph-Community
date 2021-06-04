require('dotenv').config();
const Discord = require("discord.js"),
    client = new Discord.Client({
        fetchAllMembers: true,
        partials: ['MESSAGE', 'REACTION']
    }),
config = require('./config.json'),
fs = require('fs')

client.login(process.env.token)
client.commands = new Discord.Collection()
client.db = require('./db.json')

fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if(!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})

client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return

    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})

client.on('guildMemberAdd', member => {
    const EmbedBVN=new Discord.MessageEmbed
    EmbedBVN.setTitle(`Bienvenue à ${member.user.username}`)
    EmbedBVN.setDescription(`Nous te souhaitons un bon séjour parmi nous **${member.user.username}** et espérons que tu resteras ! ^^\n\nN'hésite pas à lire le règlement dans <#805422530310569995>`)
    EmbedBVN.setImage("https://media.discordapp.net/attachments/798928215271800842/833681937385652264/1610295255316.jpg")
    EmbedBVN.setColor("RANDOM")
    member.guild.channels.cache.get(config.greeting.channelON).send(EmbedBVN)

})

client.on('guildMemberRemove', member => {
const EmbedBye=new Discord.MessageEmbed
EmbedBye.setTitle(`Au revoir à ${member.user.username}`)
EmbedBye.setDescription(`Au revoir à toi **${member.user.username}**, Nous te souhaitons une bonne continuation, et regrettons ton départ :sob:`)
EmbedBye.setImage("https://media.discordapp.net/attachments/798928215271800842/833681937385652264/1610295255316.jpg")
EmbedBye.setColor("RANDOM")
member.guild.channels.cache.get(config.greeting.channelOff).send(EmbedBye)
})

client.on('ready', () => {
    const status = [
        () => '@help',
        () => 'Crée par Itachi Uchiwa#3026',
        () => 'Paolo jte love bg... Rage pas c\'est la vie...'
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(status[i](), {type: "PLAYING"})
        i = ++i % status.length
    }, 1e4)
})

client.on('messageReactionAdd', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.add(emoji.roles)
    else reaction.users.remove(user)
})
 
client.on('messageReactionRemove', (reaction, user) => {
    if (!reaction.message.guild || user.bot) return
    const reactionRoleElem = config.reactionRole[reaction.message.id]
    if (!reactionRoleElem || !reactionRoleElem.removable) return
    const prop = reaction.emoji.id ? 'id' : 'name'
    const emoji = reactionRoleElem.emojis.find(emoji => emoji[prop] === reaction.emoji[prop])
    if (emoji) reaction.message.guild.member(user).roles.remove(emoji.roles)
})