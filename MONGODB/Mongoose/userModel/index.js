"use strict"

const express = require("express")
const app = express()

app.use(express.json())

require("dotenv").config()

const PORT = process.env.PORT
const HOST = process.env.HOST

require("./src/configs/dbConnection")

app.all("/",(req, res) => {
  res.send("Welcome to the Blog Project")
})

require("./src/middlewares/errorHandler")

app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))