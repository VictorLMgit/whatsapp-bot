// const WebWhatsappApi = require("./src/service/web-whatsapp-api.service.js");
const app = require("./src/app.js");
const processQeue = require("./src/service/process-messages.service.js");

const port = 3000;
setInterval(processQeue, 5000);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});