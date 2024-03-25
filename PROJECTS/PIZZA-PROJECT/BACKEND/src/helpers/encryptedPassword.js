"use strict"
 const crypto = require("node:crypto")

 const keyCode = process.env?.SECRET_KEY
 const loopCount = 10_000
 const charCount = 16
 const encType = "sha512"

 module.exports = (password) => {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString("hex")
 }