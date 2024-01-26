const returnResponseUtil = require("../utils/returnResponse");

function authorize(roles) {
  return (req, res, next) => {
    const accountRole = req.account.roleID;
    console.log(accountRole)
    if (!roles.includes(accountRole)) {
      returnResponseUtil.returnResponse(
        res,
        403,
        false,
        `Your role '${accountRole}' is not allowed to perform this action`
      );
    }

    console.log(roles);
    next();
  };
}

module.exports = { authorize };
