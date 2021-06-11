const Discord = require ('discord.js')
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Effectif Staff')
.setFooter('Bot de Graph\'Commmunity')
.setDescription('__**Fondateur**__ :\n- <@838818571747459093> : Itachi Uchiwa#3026\n- <@807944937265692692> : LGDS_paolo#0001\n- <@734533074515394630> : ✨ Evan le touriste ✨#5073\n\n__**Co-Fondateur**__ :\n- <@562320010199171134> : LO$so 🍊#6011\n- <@830773572808081439> : OneSai93#0001\n\n__**Responsable Staff**__ :\n- <@845781696170819625> : Zyraa#7324\n- <@482825883351121951> : 𝓖𝓪𝓫𝓻𝓲𝓮𝓵#2506\n\n__**Administrateurs**__ :\n- <@510770183468613633> : shadowsbroker {SHΛDOWS}#9999\n\n__**Modérateur**__ :\n- <@639168344024678421> : plum#4992\n- <@717087517823991848> : -Reptine-#4009\n- <@813151057907679242> : 𝑯𝒖𝒔𝒌𝒚 𝑺𝒊𝒃𝒆𝒓𝒊𝒆𝒏#9999')
.setImage("https://media.discordapp.net/attachments/798928215271800842/833681937385652264/1610295255316.jpg")
.setTimestamp())
},
    name : 'ladaronnedeljefe'
}