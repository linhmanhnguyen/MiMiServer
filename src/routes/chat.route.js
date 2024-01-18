const router = require("express").Router();

const messageController = require('../controllers/message.controller');

router.post("/", messageController.insertMessages);

module.exports = router;
