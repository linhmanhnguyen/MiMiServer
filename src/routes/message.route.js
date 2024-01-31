const express = require('express')
const router = require("express").Router();

const messageController = require('../controllers/message.controller');

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

router.post("/", 
    authenticateToken,
    authorize([1,2]),
    messageController.insertMessages
);
router.get('/conversation/:conversation_id',  
    authenticateToken,
    authorize([1,2]),
    messageController.getMessagesByConversationId
);


module.exports = router;
