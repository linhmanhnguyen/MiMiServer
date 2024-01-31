const router = require('express').Router();

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

const crawDataController = require('../controllers/crawl.controller')

router.post('/',
 crawDataController.getDataInWebSite
)

module.exports = router