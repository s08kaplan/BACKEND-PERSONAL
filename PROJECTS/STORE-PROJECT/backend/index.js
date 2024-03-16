"use strict"

const express = require("express")
const app = express()

require("dotenv").config()

const PORT = process.env.PORT
const HOST = process.env.HOST

require("express-async-errors")


require("./src/middlewares/errorHandler") //*errorHandler required
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))