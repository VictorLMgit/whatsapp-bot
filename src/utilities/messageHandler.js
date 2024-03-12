const templates = require('./templates');
const Utilities = require('./utilities.js');
class MessageHandler {
      /**
     * @param {import('whatsapp-web.js').Message} msg 
     */
    static async verifySession(msg, fetchMessages) {
        let firstSession = false;
        const chat = await msg.getChat();
        const messages = await fetchMessages(chat, 5);
        const lastMessage = messages[messages.length - 2];
        if (lastMessage == undefined) firstSession = true;
        const lastMessageTimesTamp = lastMessage.timestamp !== undefined ? lastMessage.timestamp : 0;
        const timestamp = Utilities.timesTampSP();
        const differenceTimesTamp = timestamp - lastMessageTimesTamp;

        if ((differenceTimesTamp > (12*60*60) && msg.body == "!teste") || firstSession) {
            msg.reply(templates.initial_chat(msg._data.notifyName));
        }
    }

}

module.exports = MessageHandler;