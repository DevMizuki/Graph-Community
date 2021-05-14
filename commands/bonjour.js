module.exports = {
    run: message => {
        message.channel.send('Bonjour à toi').then( message => {
        message.react("✅")
    })
},
    name : 'bjr'
}