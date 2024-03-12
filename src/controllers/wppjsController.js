const WebWhatsappApi = require('./../service/web-whatsapp-api.service.js')
class WppJSController {

    static wppClient = new WebWhatsappApi();


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
            const chats = await this.wppClient.chats();
            return res.json(chats).status(200);
        } catch (error) {
            res.json({ erro: "Problemas ao obter chats " + error }).status(500)
        }
    }
    
    static async sendMessage(req, res) {
        try {
            const number = "55" + req.body.ddd + req.body.number.slice(-8);
            const message = await this.wppClient.sendMsg(number, req.body.message);
            return res.send(message).status(200);
        } catch (error) {
            res.json({ erro: "Problemas ao enviar mensagem" + error }).status(500)
        }
    }
}

module.exports = WppJSController;