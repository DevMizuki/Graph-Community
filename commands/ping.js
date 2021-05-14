module.exports = {
    run: message => message.channel.send(`:ping_pong: J'ai un ping de ${message.client.ws.ping}ms`),
    name : 'ping'
}