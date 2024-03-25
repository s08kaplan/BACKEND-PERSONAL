"use strict";

const Token = require("../models/token");

module.exports = async (req, res, next) => {
  const auth = req.headers?.Authorization || null;
  const tokenInfo = auth ? auth.split(" ") : null; //! ["Token", "tokenKey"]

  if (tokenInfo && tokenInfo[0] === "Token") {
    const tokenData = await Token.findOne({ token: tokenInfo[1] }).populate(
      "userId"
    );

    if (tokenData) req.user = tokenData.userId;
  }
  next();
};
