"use strict"

const User = require("../models/user.model")

module.exports = async (req, res, next) => {
   // const admin = await User.findById({ _id: req.body.id })
   const { email, password} = req.body
   if( email && password) {
      const admin = await User.findOne({ email: "garip@gmail.com", password:"Garip123"})
      admin && res.send({
         isAdmin: true
       }) 
   }else {
      res.errorStatusCode = 403
      throw new Error("Unauthorized person entry, you must be Admin")
   }
   next()
}