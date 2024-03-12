const express = require('express');
const router = express.Router();
const WppJSController = require('./../controllers/wppjsController.js')
router.get("/newConnection", WppJSController.createConnection.bind(WppJSController));
router.get("/chats", WppJSController.getChats.bind(WppJSController));
router.post("/sendMessage", WppJSController.sendMessage.bind(WppJSController));
module.exports = router; 