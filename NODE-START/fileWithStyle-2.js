// const http = require("node:http")
// const fs = require("node:fs")

// http.createServer((req, res) => {
//     fs.readFile("file-1.txt", (err, data) => {
//         if(err){
//             console.log("there is a problem to handle!!!");
//             res.writeHead(404, {"Content-Type":"text/html"})
//             return res.end("404 Not Found")
//         }
//         res.writeHead(200, {"Content-Type":"text/html"})
//         const sentences = data.toString().split("\n")
//         res.write("<div style='font-family: Times New Roman, Segoe, sans-serif; display:flex; flex-direction: column;  justify-content:center; align-items: center;'>")
//         sentences.forEach(sentence => {
//             // const parts = sentence.split("important") // if split like this you can not see the word important
//             const formattedSentence = sentence.replace(/(important)/g, "<span style='font-weight: bold; color: red;'>$1</span>" )
//             res.write("<p style='margin: .5rem; font-size: 2rem; color:#8A2BE2;'>" + formattedSentence.trim() +  "</p>")
//         })
//         res.write("</div>")
//         return res.end()
//     })
// }).listen(3000)


const http = require("node:http");
const fs = require("node:fs");

http.createServer((req, res) => {
    fs.readFile("file-1.txt", (err, data) => {
        if(err){
            console.log("there is a problem to handle!!!");
            res.writeHead(404, {"Content-Type":"text/html"})
            return res.end("404 Not Found")
        }
        res.writeHead(200, {"Content-Type":"text/html"})
        const sentences = data.toString().split("\n")
        res.write("<div style='font-family: Times New Roman, Segoe, sans-serif; display:flex; flex-direction: column; justify-content:center; align-items: center;'>")
        sentences.forEach(sentence => {
            const parts = sentence.split(/(important)/) // Split the sentence while keeping the word "important"
            const formattedSentence = parts.map(part => {
                if(part.includes("important")){
                    return "<span style='font-weight: bold; color: red;'>" + part + "</span>"
                }else {
                    return part
                }
            }).join("")
            res.write("<p style='margin: .5rem; font-size: 2rem; color:#8A2BE2;'>" + formattedSentence.trim() +  "</p>")
        })
        res.write("</div>")
        return res.end()
    })
}).listen(3000)
