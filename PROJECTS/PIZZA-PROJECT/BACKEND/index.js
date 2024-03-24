"use strict"

const express = require("express")
const app = express()

app.use(express.json())

require("dotenv").config()
const PORT = process.env.PORT
const HOST = process.env.HOST

//! DB CONNECTION
const { dbConnection } = require("./src/config/dbConnection")
dbConnection()

//! CHECKING SERVER IS RUNNING
app.all("/", (req, res) => {
  if(req.isLogin){
    res.send({
        error: false,
        message: "<h1 style='color: blueviolet; text-align: center; margin: 20px'>Welcome to the PIZZA API Project</h1>",
        user: req.user
    })
  }else{
    res.send({
        error: false,
        message: "<h1 style='color: blueviolet; text-align: center; margin: 20px'>Welcome to the PIZZA API Project</h1>",
       
    })
  }
})

app.use(require("./src/middlewares/errorHandler"))  //! ERROR HANDLER required

app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))