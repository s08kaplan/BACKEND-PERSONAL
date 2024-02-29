const express = require("express")
const app = express()


require("dotenv").config()
const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || "127.0.0.1"


app.use(express())

const {middlewareGet, middlewarePost } =require("./middlewares/index")
app.use(middlewareGet, middlewarePost )

app.get("/",(req, res)=> {
    const { userInfo } = req
    console.log(req.query.name, req.query.lastName);
    console.log(userInfo);
    // res.send("<h1 style='color:blueviolet; text-align:center;margin:10px'>welcome to the EXPRESS.JS world!</h1>")
    res.send({
        message:"welcome to the EXPRESS.JS world!",
        userInfo
    })
})
app.get("/users",(req, res)=> {
    res.send("welcome to the blog page")
})
app.listen(PORT, ()=> console.log(`server is running on http://${HOST}:${PORT}`))