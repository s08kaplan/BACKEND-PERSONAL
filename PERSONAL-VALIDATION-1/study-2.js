const express = require("express")
const app = express()

const router = require("express").Router()
require("dotenv").config()

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST ||"127.0.0.1"

app.use(express.json())
app.use(express.urlencoded({ extended : true}))

// ! "/"
app.use(router)
router.route("/")
.get((req, res) => {
    res.send("<h1>Working well!!!</h1> ")
})

// ! /USERS

const { getUsersAll, authenticateUser, authenticateUserBody } = require("./middlewares/study-2-middlewares")

router.route("/users")
.get(getUsersAll,(req, res) => {
    const {userInfo} = req.query
    res.send({ userInfo })
})
// .post(authenticateUser, (req, res) => {
//     const { username } = req.query
//     res.redirect("/users/user")
//     res.send({message:`welcome authorized ${username} to your personal page`})
// })

.post(authenticateUserBody, (req, res) => {
    const { username } = req.body
    
    res.send({message:`welcome authorized ${username} to your personal page`})
})






app.listen(PORT, () => console.log(`Server is running on: http://${HOST}:${PORT}`))




