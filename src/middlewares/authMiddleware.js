const jwt = require("jsonwebtoken");
const returnResponseUtil = require("../utils/returnResponse");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return returnResponseUtil.returnResponse(res, 401, false, `Unauthorized`);
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, account) => {
    if (err) {
      return returnResponseUtil.returnResponse(res, 403, false, err);
    }

    req.account = account;
    next();
  });
}

module.exports = { authenticateToken };

