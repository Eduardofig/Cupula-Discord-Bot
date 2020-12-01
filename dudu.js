const Discord = require('discord.js');
const client = new Discord.Client();
const cupulaBot = require('./bot');

client.on('ready', () => {
    console.log(`Connected as ${client.user.tag}`);

    client.user.setActivity("Hentai",{type:"WATCHING"})

})

client.on('message',async message =>{
    if(!message.author.bot && message.content.toLowerCase().startsWith(".cupula")){
        parsedMessage = message.content.toLowerCase().split(" ");
        cupulaBot.bot(client, message, parsedMessage);
    }
})


client.login(/*process.env.token*/'NzQ0MDY1MDE1NzQwNDk3OTMw.Xzdyiw.G_Du8IqLjjCWTmCdS5NWjue49Qw');

