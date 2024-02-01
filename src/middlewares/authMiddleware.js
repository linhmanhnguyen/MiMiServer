const jwt = require("jsonwebtoken");
const returnResponseUtil = require("../utils/returnResponse");

function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Unauthorized");
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, account) => {
      if (err) {
        throw err;
      }

      req.account = account;
      next();
    });
  } catch (error) {
    throw new Error("Unauthorized");
    // returnResponseUtil.returnResponse(res, 403, false, error.message);
  }
}

module.exports = { authenticateToken };
