const http = require("node:http")
const fs = require("node:fs")

// const server = http.createServer((req, res) => {

//     const user = {
//         firstName: "Garip",
//         lastName: "alone"
//     }
//     res.writeHead(200, {"Content-Type":"application/json"})
//     res.end(JSON.stringify(user))
// })

// server.listen(3000, () => {
//     console.log("Keep going!...");
// })


// const server = http.createServer((req, res) => {

//     res.writeHead(200, {"Content-Type":"text/html"})
//     res.end("<h1>First HTML try is OK</h1>")
// })

// server.listen(3000, () => {
//     console.log("Keep going!...");
// })

// ! readFileSync reads the whole file content
// const server = http.createServer((req, res) => {

//     res.writeHead(200, {"Content-Type":"text/html"})
//     const html = fs.readFileSync("./index.html", "utf-8")
//     res.end(html)
// })

// server.listen(3000, () => {
//     console.log("Keep going!...");
// })


const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type":"text/html"})
    fs.createReadStream(__dirname + "/index.html").pipe(res)
    
})

server.listen(3000, () => {
    console.log("Keep going!...");
})