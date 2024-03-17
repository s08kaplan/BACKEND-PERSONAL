"use strict"

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


require("dotenv").config()

const PORT = process.env.PORT
const HOST = process.env.HOST

//!DB connection
require("./src/config/dbConnection")



// !Seesion-Cookies
const session = require("cookie-session")
app.use(session({
    secret: process.env.SECRET_KEY
}))

// !Check user logged in or not
app.use(require("./src/middlewares/userControl"))

// !Search Filter XSort Pagination
app.use(require("./src/middlewares/SearchFilter"))

app.all("/",(req, res) => {
  if(req.isLogin) {
    res.send({
        error: false,
        message: "Welcome to PYSCRIPT-STORE",
        session: req.session,
        user: req.user
    })
  }else {
    res.send({
        error: false,
        message: "Welcome to PYSCRIPT-STORE",
        session: req.session
    })
  }
})

app.use("/user",require("./src/routes/user.router"))
app.use("/products", require("./src/routes/products.router"))

app.use(require("./src/middlewares/errorHandler") )  //*errorHandler required
app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))

// require("./sync")()