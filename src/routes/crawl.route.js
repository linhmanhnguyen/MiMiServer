const router = require('express').Router();

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

const crawDataController = require('../controllers/crawl.controller')

router.post('/',
 authenticateToken,
 authorize([2]),
 crawDataController.getDataInWebSite
)

module.exports = router