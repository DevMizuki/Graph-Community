const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Effectif Staff')
.setFooter('Bot de Graph\'Commmunity')
.setDescription('__**Fondateur**__ :\n- <@849561405190438932> : Pain Rikudô {SHΛDOWS}#0001\n- <@807944937265692692> : LGDS_paolo#0001\n- <@660123296549044228> : bernard le canard#5257\n- <@734533074515394630> : 🦔Timon le hérisson🦔#5073\n\n__**Co-Fondateur**__ :\n- <@562320010199171134> : LO$so 🍊#6011\n- <@845781696170819625> : Nējı#9999\n\n__**Responsable Staff**__ :\n- \n\n__**Administrateurs**__ :\n- <@510770183468613633> : shadowsbroker {SHΛDOWS}#9999\n\n__**Modérateur**__ :\n- <@639168344024678421> : plum#4992\n- <@767446931499909131> : YuKy#8414')
.setImage("https://media.discordapp.net/attachments/798928215271800842/833681937385652264/1610295255316.jpg")
.setTimestamp())
},
    name : 'ladaronnedeljefe'
}