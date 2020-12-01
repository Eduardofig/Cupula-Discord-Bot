const busca = require('./artemioSearch');

class Artemio {
    constructor(client, message)
    {
        this.client = client;
        this.message = message;
    }

    comerEgirls(vezes)
    {
        this.message.channel.send('Informe o nome das vitimas de Artemio separadas por virgula')
        this.client.on('message', async messageArtemio => {
            if (!messageArtemio.author.bot) {
                let egirls = messageArtemio.content.split(',');
                for (var i = 0, len = vezes; i < len; i++) {
                    egirls.forEach(egirl=>{
                        messageArtemio.channel.send(`Artemio esta comendo ${egirl}`);
                        messageArtemio.channel.send(`${egirl} foi devorada!!!`);
                        busca.artemioSearch(egirl,i).then(url => messageArtemio.channel.send(url));
                        return;
                    })
                }
            }
            return;
        })
        return;
    }
}

module.exports.artemio = Artemio;
