const http = require("node:http")
const fs = require("node:fs")

http.createServer((req,res) => {
    fs.readFile("file-1.txt", (err, data) => {
        if(err){
            console.log("something went wrong")
            res.writeHead(404, { "Content-Type" : "text/html"})
            return res.end("404 Not Found")
        }
        res.writeHead(200, { "Content-Type" : "text/html"})
        const sentences = data.toString().split("\n")
        sentences.forEach(sentence => {
            res.write(sentence.trim() + "<br>")
        })
        
        return res.end()
    })
}).listen(3000)