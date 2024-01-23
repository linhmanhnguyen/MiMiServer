const bcrypt = require('bcrypt')
const accountRepository = require('../repositories/account.repository')
const roleRepository = require('../repositories/role.repository')

const generateAccessToken = require('../utils/generateAccessToken')
const returnResponse = require('../utils/returnResponse')
const AccountRepository = require('../repositories/account.repository')

class AuthController {

    static async Login (req, res) {
        const account_name = req.body.account_name
        const password = req.body.password

        const user = await AccountRepository.
    }

}

module.exports = AuthController;