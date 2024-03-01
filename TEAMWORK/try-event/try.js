const express = require("express")
const fs = require("fs")

const app = express()

app.get("/", (req, res) => {
    fs.readFile("index.html", "utf-8", (error, data) => {
        if(error){
            res.send(500,{ message:" Error reading the file!"})
            return
        }
        res.send(data)
    })
})

app.listen(8000, () => console.log("server is running go ahead!!!!"))