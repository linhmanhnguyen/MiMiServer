const returnResponseUtil = require("../utils/returnResponse");

function authorize(allowedRoles) {
  return (req, res, next) => {
    const accountRole = req.account.roleID;
    if (!allowedRoles.includes(accountRole)) {
      returnResponseUtil.returnResponse(
        res,
        403,
        false,
        `Your role '${accountRole}' is not allowed to perform this action`
      );
      return;
    }
    next();
  };
}

module.exports = { authorize };


