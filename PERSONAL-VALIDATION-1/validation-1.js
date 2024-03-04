const express = require("express")
const app = express()

const cors = require("cors")

const router = require("express").Router()
app.use(cors())

const PORT = process.env.PORT || 8000

app.use(router)
app.use(express.urlencoded( { extended: true } ))
app.use(express.json())
const usersInfo = require("./users.json")

const { getUserById,getUserValue, getUserByName } = require("./middlewares/")

router.route("/")
.get((req, res) => {
    // res.send(200,{message:"working"})
    res.send(`<nav style='display:flex;justify-content:space-around;align-items:center'>
    <span>PYSCRIPT</span>
    <h1 style= 'color: blueviolet; text-align:center; font-family: Arial'>working</h1>
    <ul style='list-style-type:none ;display:flex; justify-content: space-between; gap:1rem; color:magenta'>
    <li>Home</li>
    <li>React</li>
    <li>Vue</li>
    <li>JS</li>
    </ul>
    </nav>`)
})


// router.route("/users/:id")
// .post(getUserById,(req, res) => {

// })
// router.route("/users/:name")
// .post(getUserByName,(req, res) => {
//     res.send("ok workinggggg")
// })

router.route("/users")
.post(getUserValue,(req, res) => {
res.send("ok got the info")
})


app.listen(PORT, console.log(`you are at the ${PORT}`))
