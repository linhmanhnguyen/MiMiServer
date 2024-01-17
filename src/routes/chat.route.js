const router = require("express").Router();

const messageController = require('../controllers/message.controller');

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

router.post(
 "/",
//  authenticateToken,
//  authorize("admin"),
 messageController.InsertMessages
);

module.exports = router;