"use strict"

const express = require("express")
const app = express()

app.use(express.json())

require("dotenv").config()
require("./dbConnection")
const PORT = process.env.PORT
const HOST = process.env.HOST


app.all("/", (req, res) => {
  res.send("Welcome to the Mongoose Training")
})


app.use(require("./errorHandler"))
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}}`))