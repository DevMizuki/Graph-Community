const Discord = require ('discord.js')
module.exports = {
    run: message =>{
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vos rôles Notif :')
        .setDescription("📌 : Notif Partenariat\n🤖 : Notif d'annonce relative à notre bot\n🗞️ : Notif d'annonce n'impliquant pas de everyone")
        .setColor("RANDOM")
        .setTimestamp()).then( message => {
            message.react("📌")
            message.react("🤖")
            message.react("🗞️")
        });
        message.channel.send("@everyone Merci de bien vouloir prendre vos autos-rôles");
        message.channel.send("<a:fleche:834204342013263883> <#844888782851145728>")
    },
    name: "notifrole.js"
}