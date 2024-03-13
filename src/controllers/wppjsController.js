const WebWhatsappApi = require('./../service/web-whatsapp-api.service.js')
const Redis = require('ioredis');
class WppJSController {

    static wppClient = new WebWhatsappApi();
    static redisClient = new Redis();

    static async createConnection(req, res) {
        try {
            await this.wppClient.createConnection();
            res.send("created").status(201);
        } catch (error) {
            res.json({ error: "Problemas ao criar qrcode " + error }).status(500)
        }
    }

    static async getChats(req, res) {
        try {
            const chats = await this.wppClient.listChats();
            return res.json(chats).status(200);
        } catch (error) {
            res.json({ erro: "Problemas ao obter chats " + error }).status(500)
        }
    }
    
    static async sendMessage(req, res) {
        try {
            this.redisClient.rpush('messagesQeue', JSON.stringify(req.body))
            res.json({message:"Mensagem inserida na fila"}).status(201);
  
        } catch (error) {
            res.json({ erro: "Problemas ao enviar mensagem" + error }).status(500)
        }
    }
}

module.exports = WppJSController;