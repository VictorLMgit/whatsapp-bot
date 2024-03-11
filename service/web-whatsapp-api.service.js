const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class WebWhatsappApi{
    _client = new Client();

    async createConnection(){
        
        this._client.on('qr', (qr) => {
            qrcode.generate(qr, {small:true})
        });
        
        this._client.on('ready', () => {
            console.log('Client is ready!');
        });
        
        this._client.on('message', msg => {
            if (msg.body == '!ping') {
                msg.reply('Olá, bem vindo ao suporte');
            }
        });
        
        this._client.initialize();

    }

}

module.exports = WebWhatsappApi;