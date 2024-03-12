"use strict"

const mongoose = require("mongoose")

const MONGODB = process.env.MONGODB

mongoose.connect(MONGODB)
.then(() => console.log("DB connection is OK"))
.catch((err) => console.log("DB connection is FAILED",err))