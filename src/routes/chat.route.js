const express = require('express')
const router = require("express").Router();

const messageController = require('../controllers/message.controller');

router.post("/", messageController.insertMessages);
router.get('/conversation/:conversation_id',  messageController.getMessagesByConversationId);


module.exports = router;
