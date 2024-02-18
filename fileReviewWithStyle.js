const http = require("node:http")
const fs =  require("node:fs")

http.createServer((req,res) => {
    fs.readFile("file-1.txt", (err, data) => {
        if(err){
            console.log("oops there is a problem");
            res.writeHead(404, {"Content-Type" : "text/html"})
            return res.end("404 Not Found")
        }
        res.writeHead(200, {"Content-Type" : "text/html"})
        const sentences = data.toString().split("\n")
        res.write("<div style='font-family : Segoe, Arial, sans-serif; font-size: 3rem; color: #8A2BE2; '>")
        sentences.forEach(sentence => {
            res.write("<p style='margin:.8rem; '>" + sentence.trim() + "</p>")
        })
        res.write("</div>")
        return res.end()
    })
}).listen(3000)