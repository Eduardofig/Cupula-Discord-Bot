const artImport = require('./artemio');

const bot = async (client, message, parsedMessage) => {
    switch (parsedMessage[1].toLowerCase()) {
        case 'heee':
        case 'heeee':
        case 'heeeee':
        case 'heeeeee':
        case 'heeeeeee':
            if (!message.guild  || !message.member.voice.channel){
                message.channel.send('Entra num canal de voz antes gay');
                break;
            };
            var connection = await message.member.voice.channel.join();
            connection.play('WhatsApp-Ptt-2020-08-15-at-03.46.09.mp3');
            message.channel.send("heeeeeeeeeeeeeeeeeeeeee");
            break;
        case 'cade':
            parsedMessage[2].toLowerCase().startsWith('lucas')? message.voice.channel.send('Lais nao deixou'): message.channel.send('Comando desconhecido, vadia');
            break;
        case 'hino':
            if (!message.guild  || !message.member.voice.channel){
                message.channel.send('Entra num canal de voz antes gay');
                break;
            };
            var connection = await message.member.voice.channel.join();
            var dispatcher = connection.play("hino.mp3");
            message.channel.send("Tocando agora o nosso hino, a cantiga que ecoa no coração de todos os patriotas!!",{files:["./images/bolsonaro.jpeg"]});
            client.on('message', async messageAux =>{
                if (!messageAux.author.bot && messageAux.content.toLowerCase() === '.cupula pare'){
                    dispatcher.destroy();
                    message.channel.send("Paramos o hino prematuramente, voce venceu, comunista de merda!");
                    return;
                }
            })                 
            break;
        case 'artemio':
            random = Math.floor(Math.random() * 8);
            message.channel.send("Artemio esta com fome, quantas vezes ele vai se satisfazer hoje?",{files:["./images/artemio/" + random + ".jpeg"]})
                .then(() => {
                    message.channel.awaitMessages(artImport.filter, {max:1, time:30000, errors:['time']})
                        .then(messageVezes =>{
                            var vezes = parseInt(messageVezes.first().content);
                            var artemio = new artImport.artemio(client, messageVezes.first());
                            artemio.comerEgirls(vezes);
                            return;
                        })
                        .catch(messageVezes => {
                            console.log(messageVezes);
                            message.channel.send("Ninguem respondeu, Artemio nao vai devorar ninguem, milagre!");
                            return;
                        })
                    return;
                })
            break;
        case 'azulinho':
        case 'lucas':
            random = Math.floor(Math.random() * 10);
            message.channel.send('"Eu comeria Rarys"',{files:["./images/lucas/" + random + ".jpeg"]});
            message.channel.send("Ola, azulinho");
            break;
        case 'lara':
            random = Math.floor(Math.random() * 4);
            message.channel.send('"Oi, buceta"',{files:["./images/lara/" + random + ".jpeg"]});
            message.channel.send("O perfurador de oceanos, o descobridor de pré-sal, aquele cujo instrumento dá voltas");
            break;
        case 'dudu':
        case 'eduardo':
            random = Math.floor(Math.random() * 2);
            message.channel.send("Mandando imagem de Dudu",{files:["./images/eduardo/" + random + ".jpeg"]});
            message.channel.send("O mais gato da cupula");
            break;
        case 'gabiru':
        case 'gabriel':
            random = Math.floor(Math.random() * 7);
            message.channel.send("uh uh meu nome é Gabriel uh uh gabriel uh uh",{files:["./images/gabriel/" + random + ".jpeg"]});
            message.channel.send("Gabriel cagou fora do vaso");
            break;
        case 'negao':
            random = Math.floor(Math.random() * 9);
            message.channel.send("Mandando imagem de Negão",{files:["./images/negao/" + random + ".jpeg"]});                        
            break;
        case 'ryan':
            random = Math.floor(Math.random() * 1);
            message.channel.send("Mandando imagem de Ryan",{files:["./images/ryan/" + random + ".jpeg"]});
            message.channel.send("o mlk rasante da putaria o levianta das xotas o feiticeiro do anal o rei das seperpentes que utilizam sabonete íntimo");
            break;
        case 'rafael':
            random = Math.floor(Math.random() * 2);
            message.channel.send("Mandando imagem de Rafael",{files:["./images/rafael/" + random + ".jpeg"]});        
            break;
        case 'coutinho':
        case 'demiurgo':
        case 'couts':
            random = Math.floor(Math.random() * 3);
            message.channel.send("Mandando imagem de Coutinho,o DEMIURGO",{files:["./images/couts/" + random + ".jpeg"]});
            message.channel.send("A singularidade, o criador do universo, a entidade que, do chaos e da entropia, fez a materia ");
            break;
        case 'pedro':
            message.channel.send("ola, Mestre")
            break;
        case 'spam':
            var args = message.content.slice(12).trim().split(' ');
            for (i = 0; i<100 ; i++)
                message.channel.send(args)
            break;
        default:
            message.channel.send('Comando desconhecido, vadia!');
            break;
    }
}

module.exports.bot = bot;
