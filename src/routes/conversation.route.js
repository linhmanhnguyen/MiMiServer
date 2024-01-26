const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation.controller');

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

router.post('/', 
    authenticateToken,
    authorize([2]),
    conversationController.createConversation
);

router.get('/', 
    authenticateToken,
    authorize([2]),
    conversationController.getAllConversations
);

router.get('/account/:account_id',
    authenticateToken,
    authorize([2]),
    conversationController.getConversationsByAccountID
);

router.get('/:id', 
    authenticateToken,
    authorize([2]), 
    conversationController.getConversationById
);

router.put('/:id', 
    authenticateToken,
    authorize([2]),
    conversationController.updateConversation
);

router.delete('/:id', 
    authenticateToken,
    authorize([2]),
    conversationController.deleteConversation
);

module.exports = router;
