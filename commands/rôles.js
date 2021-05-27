const Discord = require ("discord.js")

module.exports = {
    run: message =>{
        message.channel.send("@everyone")
        message.channel.send(new Discord.MessageEmbed()
        .setTitle("Description Rôles du Staff")
        .setDescription("***👑︙Fondateur***\nLe fondateur est une personne qui a l\'idée initiale, celui qui a l'idée de créer et d'organiser une idée, en l'occurence le\nserveur discord. Pour les membres du staff, ce rôle est impossible à obtenir.\n***🔱︙Co-Fondateur***\nUn Co-fondateur est une personne qui fonde une entité de chose (en l'occurence dans le serveur), en collaboration avec un autre individu. Pour les membres du staff, ce rôle est impossible à obtenir.\n***🛡️︙Responsable Staff***\nLe Responsable Staff doit gérer le staff, il doit regarder leur activité, leur donner des conseils. Il doit prendre des initiatives, proposer des idées pour le serveur, et éventuellement les mettre en éxécution. Les Resp.staff sont les plus aptes à nous éclairer sur la position d'un membre du staff en cas de nouvel effectif.\n***🔮︙Administrateur***\nL\'Administrateur est un modérateur ayant plus de permissions comme Expulser ou Bannir des membres.\n***💧︙Modérateur***\nLe Modérateur est une personne ayant plus de permissions qu'un membre lambda. Il peut gérer certains salon, il gère les messages et vérifie que le règlement est respecté. Il peut sanctionner les membres par un warn ou un mute.")
        .setColor("RANDOM")
        .setTimestamp())
    },
    name: "descrolekirua"
}