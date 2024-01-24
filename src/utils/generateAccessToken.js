const jwt = require("jsonwebtoken");

class GenerateAccessToken {
  static GenerateAccessTokenForOwner(
    accountID,
    userID,
    roleID,
  ) {
    return jwt.sign(
      {
        accountID: accountID,
        userID: userID,
        roleID: roleID,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "120m" }
    );
  }

  static GenerateAccessTokenForOwnerWhenLogin(
    accountID,
    userID,
    roleID,
  ) {
    return jwt.sign(
      {
        accountID: accountID,
        userID: userID,
        roleID: roleID,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "120m" }
    );
  }
}

module.exports = GenerateAccessToken;
