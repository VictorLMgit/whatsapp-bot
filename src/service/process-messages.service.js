const { wppClient } = require("../controllers/wppjsController.js");
const WebWhatsappApi = require("./web-whatsapp-api.service.js");
const Redis = require('ioredis');

async function processQeue() {
    try {

        const redisClient = new Redis();
        console.log("processando fila...");
        const message = await redisClient.lpop('messagesQeue');
        let processingMessage = message;
        if (processingMessage) {
            const messageParsed = JSON.parse(processingMessage);
            const number = "55" + messageParsed.ddd + messageParsed.number.slice(-8);
            const message = await wppClient.sendMsg(number, messageParsed.message);
        } else {
            console.log('Empty qeue');
        }
    } catch (error) {
        console.log("Erro ao carregar elemento da fila");
    }
}

module.exports = processQeue;
