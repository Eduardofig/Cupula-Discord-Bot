const busca = require('./artemioSearch');
const filter = response => {
    return !response.author.bot;
};
class Artemio {
    constructor(client, message)
    {
        this.client = client;
        this.message = message;
    }

    comerEgirls(vezes)
    {
        this.message.channel.send('Informe o nome das vitimas de Artemio separadas por virgula')
            .then(() => {
                this.message.channel.awaitMessages(filter, {max:1, time:30000, erros: ['time']})
                    .then(messageArtemio => {
                        let egirls = messageArtemio.first().content.split(',');
                        for (var i = 0, len = vezes; i < len; i++) {
                            egirls.forEach(egirl=>{
                                messageArtemio.first().channel.send(`Artemio esta comendo ${egirl}`);
                                busca.artemioSearch(egirl,i).then(url => messageArtemio.first().channel.send(`${egirl} foi devorada!!!`, {files:[url]}));
                                return;
                            })
                        }
                        return;
                    })
            })
    }
}

module.exports.artemio = Artemio;
module.exports.filter = filter;
