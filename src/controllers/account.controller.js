const AccountRepository = ('../repositories/AccountRepository');
const {
    accountSchema,
    updateAccountSchema 
} =  require('../validations/accountSchema');

const jwt = require('jsonwebtoken');
const returnResponseUtil = require('../utils/returnResponse');
const ReturnResponseUtil = require('../utils/returnResponse');

class AccountController {
    static async GetAllAccounts(req, res) {
        var result = await AccountRepository.GetAllAccounts();
        if (result.length > 0){
            ReturnResponseUtil.returnResponse(
                res,
                200,
                true,
                "Get All Accounts Successfully", 
                result
            );
        } else {
            returnResponseUtil.returnResponse(
                res,
                404,
                false,
                "No records found at the moment"
            );
        }
    }
 /**
   * Function Controller: Lấy thông tin tài khoản bằng ID tài khoản
   */
    static async GetAccountByID(){
        var id = req.params.id;
        var result = await AccountRepository.GetAccountByID(id);
        if (result.length > 0){
            ReturnResponseUtil.returnResponse(
                res,
                200,
                true,
                "Get Account By ID successfully"
            );
        } else {
            ReturnResponseUtil.returnResponse(
                res,
                404,
                false,
                "No records found at the moment"
            );
        }
    }
 /**
   * Function Controller: Cập nhật tài khoản bằng ID
   */
    static async updateAccountByID(){
        try {
            await updateAccountSchema.validateAsync(req.body);

            var id = req.params.id;
            var password = req.params.password;
            var result = await AccountRepository.updateAccountByID(
                id,
                password
            )
            if (result){
                ReturnResponseUtil.returnResponse(
                    res,
                    200,
                    true,
                    "Updated User Account Successfully"
                  );
                }
        } catch (error) {
            ReturnResponseUtil.returnResponse(
                res,
                400,
                false,
                "An error has occurred, please try again"
            );
        }
    }
 /**
   * Function Controller: Xóa tài khoản bằng ID tài khoản
   */
    static async DeleteAccountByID(req, res) {
        try {
            var id = req.params.id;

            var result = await AccountRepository.DeleteAccountByID(id);
            if (result) {
                ReturnResponseUtil.returnResponse(
                res,
                200,
                true,
                "Deleted User Account successfully"
                );
            }   
        } catch (error) {
            ReturnResponseUtil.returnResponse(
            res,
            400,
            false,
            "An error has occurred, please try again"
            );
        }
    }
}

module.exports = AccountController;