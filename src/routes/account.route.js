const express = require('express')
const router = require('express').Router();

const { authenticateToken } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/authorizeMiddleware");

const accountController = require('../controllers/account.controller')

router.get('/',
 authenticateToken,
 authorize([1,2]),
 accountController.getAllAccounts
);

router.get('/:id',
 authenticateToken,
 authorize([1,2]),
 accountController.getAccountByID
);
router.put('/change-password/:id',
 authenticateToken,
 authorize([1,2]),
 accountController.updateAccountByID
);
router.delete('/:id',
 authenticateToken,
 authorize([1,2]), 
 accountController.deleteAccountByID
);

module.exports = router;