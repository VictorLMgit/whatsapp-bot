const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

class WebWhatsappApi {
    _client = new Client();

    async createConnection() {

        this._client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true })
        });

        this._client.on('ready', () => {
            console.log("ready!");
        });

        this._client.on('message', msg => {
            if (msg.body == '!ping') {
                msg.reply('Olá, bem vindo ao suporte');
            }
        });

        this._client.initialize();

    }

    async chats() {
        return this._client.getChats();
    }

    async sendMsg(number, message) {

        try {
            //valid number : 55(ddd)(8 digits)@c.us
            number = number + "@c.us";
            const sendMessageData = await this._client.sendMessage(number, message);
            return sendMessageData;

        } catch (error) {
            console.log("Mobile number is not registered");
            const erro = new Error("Numero inválido");
            erro.code = "IN1";
            throw erro;

        }

    }

}

module.exports = WebWhatsappApi;