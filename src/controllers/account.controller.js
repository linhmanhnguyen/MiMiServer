const jwt = require('jsonwebtoken');
const moment = require("moment-timezone");

const accountRepository = require('../repositories/account.repository');
const {
    accountSchema,
    registerAccountSchema,
    updateAccountSchema
} = require('../validations/accountSchema');

const returnResponseUtil = require('../utils/returnResponse');
const GenerateAccessToken = require('../utils/generateAccessToken');

const currentTime = moment()
  .tz("Asia/Ho_Chi_Minh")
  .format("YYYY-MM-DD_HH-mm-ss");

class AccountController {

    static async getAllAccounts(req, res) {
        try {
            var result = await accountRepository.getAllAccounts();
            if (result.length > 0) {
                returnResponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Lấy ra danh sách tài khoản thành công",
                    result
                );
            } else {
                returnResponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Không tìm thấy tài khoản"
                );
            }
        } catch (error) {
            console.error(error);
            returnResponseUtil.returnResponse(
                res,
                500,
                false,
                "Đã có lỗi xảy ra khi lấy danh sách tài khoản"
            );
        }
    }

    static async getAccountByID(req, res) {
        try {
            var id = req.params.id;
            var result = await accountRepository.getAccountByID(id);
            if (result.length > 0) {
                returnResponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Thành công",
                    result
                );
            } else {
                returnResponseUtil.returnResponse(
                    res,
                    404,
                    false,
                    "Không tìm thấy tài khoản"
                );
            }
        } catch (error) {
            console.error(error);
            returnResponseUtil.returnResponse(
                res,
                500,
                false,
                "Đã có lỗi xảy ra khi lấy thông tin tài khoản"
            );
        }
    }

    static async updateAccountByID(req, res) {
        try {
            await updateAccountSchema.validateAsync(req.body);

            var id = req.params.id;
            var password = req.body.password; 

            var result = await accountRepository.updateAccountByID(id, password);

            if (result) {
                returnResponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Sửa đổi thông tin tài khoản thành công"
                );
            }
        } catch (error) {
            console.error(error);
            returnResponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã có lỗi xảy ra, vui lòng thử lại"
            );
        }
    }

    static async deleteAccountByID(req, res) {
        try {
            var id = req.params.id;
            var result = await accountRepository.deleteAccountByID(id);
            if (result) {
                returnResponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Xoá tài khoản thành công"
                );
            }
        } catch (error) {
            console.error(error);
            returnResponseUtil.returnResponse(
                res,
                400,
                false,
                "Đã có lỗi xảy ra khi xoá tài khoản"
            );
        }
    }
}

module.exports = AccountController;
