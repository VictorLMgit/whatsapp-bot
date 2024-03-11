const WebWhatsappApi = require("./service/web-whatsapp-api.service");

const wppClient = new WebWhatsappApi();
wppClient.createConnection();