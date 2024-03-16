"use strict" 

const router = require("express").Router()
const User = require("../controllers/user.controller")

// !REGISTER-LOGIN-LOGOUT
router.route("/register")
.post(User.register)

router.route("/login")
.post(User.login)

router.route("/logout")
.get(User.logout)


router.route("/")
.get(User.list)


router.route("/:userId")
.get(User.read)
.put(User.update)
.patch(User.update)
.delete(User.delete)

module.exports = router
