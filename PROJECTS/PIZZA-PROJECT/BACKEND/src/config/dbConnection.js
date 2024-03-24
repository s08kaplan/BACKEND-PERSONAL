"use strict"

const mongoose = require("mongoose")

const dbConnection = () => {
    mongoose.connect(process.env.MONGODB)
    .then(() => console.log("DB connected SUCCESSFULLY :)"))
    .catch((err) => console.log("DB not connected",err))
}

/* ------------------------------------------------------- */

module.exports = {
    mongoose, dbConnection
}