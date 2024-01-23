const express = require('express')
const router = require('express').Router();

const accountController = require('../controllers/account.controller')

router.get('/', accountController.getAllAccounts);
router.get('/:id', accountController.getAccountByID);
router.put('/change-password/:id', accountController.updateAccountByID);
router.delete('/:id', accountController.deleteAccountByID);

module.exports = router;