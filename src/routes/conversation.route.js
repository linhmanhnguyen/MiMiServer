const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation.controller');

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

router.post('/', 
    authenticateToken,
    authorize([1]),
    conversationController.createConversation
);

router.get('/', 
    authenticateToken,
    authorize([1]),
    conversationController.getAllConversations
);

router.get('/account/:account_id',
    authenticateToken,
    authorize([1,2]),
    conversationController.getConversationsByAccountID
);

router.post('/search-conversation-by-name',
    authenticateToken,
    authorize([1,2]),
    conversationController.getConversationByConversationName
);

router.get('/:id', 
    authenticateToken,
    authorize([1,2]), 
    conversationController.getConversationById
);

router.put('/:id', 
    authenticateToken,
    authorize([1]),
    conversationController.updateConversation
);

router.delete('/:id', 
    authenticateToken,
    authorize([1,2]),
    conversationController.deleteConversation
);

module.exports = router;
