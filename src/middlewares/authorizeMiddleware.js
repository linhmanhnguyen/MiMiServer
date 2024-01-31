const returnResponseUtil = require("../utils/returnResponse");

function authorize(allowedRoles) {
  return (req, res, next) => {
    const accountRole = req.account.roleID;
    console.log(accountRole);

    if (!allowedRoles.includes(accountRole)) {
      returnResponseUtil.returnResponse(
        res,
        403,
        false,
        `Your role '${accountRole}' is not allowed to perform this action`
      );
    }

    console.log(allowedRoles);
    next();
  };
}

module.exports = { authorize };


