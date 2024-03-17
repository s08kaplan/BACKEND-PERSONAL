"use strict"

const User = require("../models/user.model")

module.exports = async (req, res, next) => {
   const admin = await User.findById({ _id: req.body.id })
 admin && res.send({
    isAdmin: true
  }) 
   next()
}