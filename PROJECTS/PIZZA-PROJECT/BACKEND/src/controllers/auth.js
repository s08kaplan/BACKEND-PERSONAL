"use strict";

const User = require("../models/user");
const Token = require("../models/token");
const encryptedPassword = require("../helpers/encryptedPassword");

// ! Login & Logout

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      //! if user entered email and password

      const user = await User.findOne({ email, password }); //! check email and password exists in Database

      if (user && user.isActive) {
        //! if user exists and active
        let tokenData = await Token.findOne({ userId: user._id }); //! check token exists

        if (!tokenData) {
          //! if token not exists create token
          const tokenKey = encryptedPassword(user._id + Date.now());
          tokenData = await Token.create({ userId: user._id, token: tokenKey });
        }

        res.status(200).send({
            error: false,
            token: tokenData.token,
            user
        })
      }else {
        res.errorStatusCode = 401
        throw new Error("Please check your email and password entry")
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter your email and password");
    }
  },

  logout: async (req, res) => {
    const auth = req.headers?.Authorization || null 
    const tokenInfo = auth ? auth.split(" ") : null  //! ["Token", "tokenKey"]

    let deleted;
    if( tokenInfo && tokenInfo[0] === "Token"){
        deleted = await Token.deleteOne({ token: tokenInfo[1]})
    }

    res.status(200).send({
        error: false,
        message:"Logged out successfully and Token deleted! ",
        deleted
    })
  }
};
