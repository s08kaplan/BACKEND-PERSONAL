"use strict"

const mongoose = require("mongoose")

const MONGODB = process.env.MONGODB
mongoose.connect(MONGODB)
.then(() => console.log("MongoDB connected SUCCESSFULLY"))
.catch((err) => console.log("MongoDB  NOT connected!!!",err))