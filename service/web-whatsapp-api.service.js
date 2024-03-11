const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class WebWhatsappApi{
    _client = new Client();

    async createConnection(){
        
        _client.on('qr', (qr) => {
            qrcode.generate(qr, {small:true})
        });
        
        _client.on('ready', () => {
            console.log('Client is ready!');
        });
        
        _client.on('message', msg => {
            if (msg.body == '!ping') {
                msg.reply('Olá, bem vindo ao suporte');
            }
        });
        
        _client.initialize();

    }

}

module.exports = WebWhatsappApi;