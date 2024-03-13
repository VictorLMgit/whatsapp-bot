const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const Utils = require('./../utilities/utilities.js');
const MessageHandler = require('../utilities/messageHandler.js');

class WebWhatsappApi {
    _client = new Client();

    async createConnection() {

        this._client.on('qr', (qr) => {
            qrcode.generate(qr, { small: true })
        });

        this._client.on('ready', () => {
            console.log("ready!");
        });

        this._client.on('message', async msg => {
            if (Utils.isGroup(msg.from)) return;
            MessageHandler.verifySession(msg, this.fetchMessagesFromChat);
            
        });

        this._client.initialize();
    }

    async listChats() {
        return this._client.getChats();
    }

    /**
     * @param {import('whatsapp-web.js').Chat} chat 
     * @param {int} limit 
     * @return {import('whatsapp-web.js').Message[]}
     */
    async fetchMessagesFromChat(chat, limit){
        const messages = await chat.fetchMessages({limit: limit});
        return messages;
    }

    async sendMsg(number, message) {

        try {
            //valid number : 55(ddd)(8 digits)@c.us
            number = number + "@c.us";
            const sendMessageData = await this._client.sendMessage(number, message);
            return sendMessageData;

        } catch (error) {
            console.log(error);
            const erro = new Error("Numero inválido");
            erro.code = "IN1";
            throw erro;

        }

    }



}

module.exports = WebWhatsappApi;