const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');

client.on('ready', () => {
    console.log("Connected as" + client.user.tag)

    client.user.setActivity("Hentai",{type:"WATCHING"})

    /*client.guilds.forEach((guild) => {
        console.log(guild.name)
        guild.channels.forEach((channel) =>{
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        })
    })*/

})


function checkCommand(message, commandName){
    return message.content.toLowerCase().startsWith(".cupula " + commandName)
}

client.on('message',async message =>{
    if(!message.author.bot){
        if (message.content.toLowerCase().startsWith(".cupula ")){
            if(checkCommand(message, "hee") || checkCommand(message,"heee") || checkCommand(message,"heeee") || checkCommand(message,"heeeee")){
                if (!message.guild) return;
                if (message.member.voice.channel) {
                    const connection = await message.member.voice.channel.join();
                    const dispatcher = connection.play('WhatsApp-Ptt-2020-08-15-at-03.46.09.mp3')       
                    message.channel.send("heeeeeeeeeeeeeeeeeeeeee")             
                } else {
                        message.reply('Entra num canal de voz antes, gay');}                
            }else if (checkCommand(message,"hino")){
                if (!message.guild) return;
                if (message.member.voice.channel) {
                    const connection = await message.member.voice.channel.join();
                    const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=Iz5G3fQ18Aw', { filter: 'audioonly' }))   
                    message.channel.send("Tocando agora o nosso hino, a cantiga que ecoa no coração de todos os patriotas!!",{files:["./images/bolsonaro.jpeg"]})
                    client.on('message', async message =>{
                        if (checkCommand(message,"pare")){
                            dispatcher.destroy()
                            message.channel.send("Paramos o hino prematuramente, voce venceu, comunista de merda!")
                        }
                    })                 
                } else {
                        message.reply('Entra num canal de voz antes, gay');}
            }else if(checkCommand(message,"cade lucas") || checkCommand(message,"cade lucas?")){
                message.channel.send("Lais não deixou");
            }else if(checkCommand(message,"artemio")){
                random = Math.floor(Math.random() * 8);
                message.channel.send("Mandando imagem de Artêmio",{files:["./images/artemio/" + random + ".jpeg"]});
                message.channel.send("Ola, bebezão")
            }else if(checkCommand(message,"lucas") || checkCommand(message,"azulinho") || checkCommand(message, "azul")){
                random = Math.floor(Math.random() * 10);
                message.channel.send('"Eu comeria Rarys"',{files:["./images/lucas/" + random + ".jpeg"]});
                message.channel.send("Ola, azulinho");
            }else if(checkCommand(message,"lara")){
                random = Math.floor(Math.random() * 4);
                message.channel.send('"Oi, buceta"',{files:["./images/lara/" + random + ".jpeg"]});
                message.channel.send("O perfurador de oceanos, o descobridor de pré-sal, aquele cujo instrumento dá voltas");
            }else if(checkCommand(message,"eduardo") || checkCommand(message,"dudu")){
                random = Math.floor(Math.random() * 2);
                message.channel.send("Mandando imagem de Dudu",{files:["./images/eduardo/" + random + ".jpeg"]});
                message.channel.send("O mais gato da cupula");
            }else if(checkCommand(message,"gabriel") || checkCommand(message,"twink")){
                random = Math.floor(Math.random() * 7);
                message.channel.send("uh uh meu nome é Gabriel uh uh gabriel uh uh",{files:["./images/gabriel/" + random + ".jpeg"]});
                message.channel.send("Gabriel cagou fora do vaso");
            }else if(checkCommand(message,"negao") || checkCommand(message,"daniel")){
                random = Math.floor(Math.random() * 9);
                message.channel.send("Mandando imagem de Negão",{files:["./images/negao/" + random + ".jpeg"]});                        
            }else if(checkCommand(message,"ryan")){
                random = Math.floor(Math.random() * 1);
                message.channel.send("Mandando imagem de Ryan",{files:["./images/ryan/" + random + ".jpeg"]});
                message.channel.send("o mlk rasante da putaria o levianta das xotas o feiticeiro do anal o rei das seperpentes que utilizam sabonete íntimo");
            }else if(checkCommand(message,"rafael")){
                random = Math.floor(Math.random() * 2);
                message.channel.send("Mandando imagem de Rafael",{files:["./images/rafael/" + random + ".jpeg"]});        
            }else if(checkCommand(message,"couts") || checkCommand(message,"coutinho") || checkCommand(message,"demiurgo")){
                random = Math.floor(Math.random() * 3);
                message.channel.send("Mandando imagem de Coutinho,o DEMIURGO",{files:["./images/couts/" + random + ".jpeg"]});
                message.channel.send("A singularidade, o criador do universo, a entidade que, do chaos e da entropia, fez a materia ");
            }else if(checkCommand(message,"pedro")){
                message.channel.send("ola, Mestre")
            }else if(checkCommand(message,"spam")){
                if(!message.author.bot){
                    var auth = message.author    
                    message.channel.send("Digite a mensagem que voce quer spammar")
                    client.on('message',async message =>{
                        if(!message.author.bot && message.author == auth){
                            var spam = message.content
                            message.channel.send("Digite o numero de vezes que voce quer spammar")
                            client.on('message',async message =>{
                                if(!message.author.bot && message.author == auth){
                                var numero = parseInt(message.content)   
                                for (i = 0; i < numero; i++)
                                message.channel.send(spam)
                                break
                            }})
                        }
                    })
                }}else{
                message.channel.send("comando desconhecido, vadia")
        }
    }
        }
    })


client.login(process.env.token);
/*    if ((message.content == "Pedro") || message.content == "pedro"){

        message.channel.send('Olá,mestre');

    }

    if ((message.content == "Artemio") || message.content == "artemio"){

        message.channel.send('Olá,bebezao');

    }

    if ((message.content == "Couts") || message.content == "couts"){

        message.channel.send('FALAA COOOUTS!');

    }

    if ((message.content == "Lara") || message.content == "lara"){

        message.channel.send('O perfurador de oceanos, o descobridor de pré-sal, aquele cujo instrumento dá voltas');

    }

    if ((message.content == "Gabriel") || message.content == "gabriel"){

        message.channel.send('Gabriel cagou fora do vaso');

    }

    if ((message.content == ".cupula lucas") || message.content == ".cupula Lucas"){

       random = Math.floor(Math.random() * 10);
       message.channel.send("Mandando imagem de Lucas",{files:["./images/lucas/" + random + ".jpeg"]});
        
    }

    if ((message.content == ".cupula lara") || message.content == ".cupula Lara"){

        random = Math.floor(Math.random() * 4);
        message.channel.send("Mandando imagem de Lara",{files:["./images/lara/" + random + ".jpeg"]});

    }

    if ((message.content == ".cupula eduardo") || message.content == ".cupula Eduardo"){

        random = Math.floor(Math.random() * 2);
        message.channel.send("Mandando imagem de Eduardo",{files:["./images/eduardo/" + random + ".jpeg"]});

    }

    if ((message.content == ".cupula couts") || message.content == ".cupula Couts"){

        random = Math.floor(Math.random() * 3);
        message.channel.send("Mandando imagem de Coutinho,o DEMIURGO",{files:["./images/couts/" + random + ".jpeg"]});

    }


    if ((message.content == ".cupula negao") || message.content == ".cupula Negao"){

        random = Math.floor(Math.random() * 9);
        message.channel.send("Mandando imagem de Negão",{files:["./images/negao/" + random + ".jpeg"]});

    }

    if ((message.content == ".cupula artemio") || message.content == ".cupula Artemio"){

        random = Math.floor(Math.random() * 8);
        message.channel.send("Mandando imagem de Artêmio",{files:["./images/artemio/" + random + ".jpeg"]});

    }

    if ((message.content == ".cupula Gabriel") || message.content == ".cupula gabriel"){

        random = Math.floor(Math.random() * 7);
        message.channel.send("Mandando imagem de Gabriel",{files:["./images/gabriel/" + random + ".jpeg"]});

    }

    if ((message.content == ".cupula Ryan") || message.content == ".cupula ryan"){

        random = Math.floor(Math.random() * 1);
        message.channel.send("Mandando imagem de Ryan",{files:["./images/ryan/" + random + ".jpeg"]});

    }

    if ((message.content == ".cupula Rafael") || message.content == ".cupula rafael"){

        random = Math.floor(Math.random() * 2);
        message.channel.send("Mandando imagem de Rafael",{files:["./images/rafael/" + random + ".jpeg"]});*/





