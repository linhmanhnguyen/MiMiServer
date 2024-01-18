const express = require('express');
const router = express.Router();
const conversationController = require('../controllers/conversation.controller');

// Tạo cuộc trò chuyện
router.post('/', conversationController.createConversation);

// Đọc tất cả cuộc trò chuyện
router.get('/', conversationController.getAllConversations);

// Đọc cuộc trò chuyện theo ID
router.get('/:id', conversationController.getConversationById);

// Lấy ra các tin nhắn trong một cuộc hội thoại
router.get('/:id/messages',  conversationController.getAllMessagesInConversation);

// Cập nhật cuộc trò chuyện
router.put('/:id', conversationController.updateConversation);

// Xoá cuộc trò chuyện
router.delete('/:id', conversationController.deleteConversation);

module.exports = router;
