const WebWhatsappApi = require("./src/service/web-whatsapp-api.service.js");
const app = require("./src/app.js");
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});