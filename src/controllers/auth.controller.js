const bcrypt = require("bcrypt");
const accountRepository = require('../repositories/account.repository');
const { registerAccountSchema } = require("../validations/accountSchema");

const generateAccessToken = require('../utils/generateAccessToken');
const returnResponseUtil = require('../utils/returnResponse');

const moment = require("moment-timezone");
const currentTime = moment()
  .tz("Asia/Ho_Chi_Minh")
  .format("YYYY-MM-DD_HH-mm-ss");

class AuthController {

    static async login(req, res) {
        const account_name = req.body.account_name;
        const password = req.body.password;
    
        const account = await accountRepository.searchAccountByAccountName(account_name);
        if (account.length > 0) {
          const checkPassword = await bcrypt.compare(password, account[0].password);
          if (!checkPassword) {
            returnResponseUtil.returnResponse(
              res,
              422,
              false,
              `Sai mật khẩu, vui lòng thử lại`
            );
          } else {
            const token =
                generateAccessToken.GenerateAccessTokenForOwnerWhenLogin(
                  account[0].id,
                  account[0].user_id,
                  account[0].role_id,
                );
              returnResponseUtil.returnResponse(
                res,
                200,
                true,
                "Đăng nhập thành công",
                token
              );
          console.log(token)
          }
        } else {
          returnResponseUtil.returnResponse(
            res,
            404,
            false,
            `Tài khoản không tồn tại`
          );
        }
    }
    static async checkExistAccount(req, res) {
        const account_name = req.params.account_name;
        const checkExistAccount = await accountRepository.checkExistAccount(
          account_name
        );
        if (checkExistAccount.length > 0) {
          returnResponseUtil.returnResponse(
            res,
            400,
            false,
            `Tài khoản đã tồn tại`
          );
        } else {
          returnResponseUtil.returnResponse(
            res,
            200,
            true,
            `Tên tài khoản hợp lệ`
          );
        }
      }

}

module.exports = AuthController;