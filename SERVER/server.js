const http = require("node:http")

// const hostname = "127.0.0.1"
// const port = 8080

// const server = http.createServer((req, res) => {
// // console.log(req.url);
// // res.statusCode = 200
// // res.setHeader("Content-Type", "text/plain")
// // res.end("Hi, I am back")
// res.writeHead(200, {"Content-Type" : "text/html"})
// res.write("<h1>Hi, I am back</h1>")
// res.end()
// }).listen(port,hostname, () => {console.log(`server is running, http://${hostname}:${port}/`);})



const server = http.createServer((req, res) => {
res.writeHead(200, {"Content-Type" : "text/html"})
res.write("<nav>")
res.write("<ul>")
res.write("<li>HOME</li>")
res.write("<li>ABOUT</li>")
res.write("<li>GALLERY</li>")
res.write("</ul>")
res.write("</nav>")
res.write("<h1>Hi, I am back</h1>")
res.write("<h2>just trying</h2>")
res.end()
}).listen(8080)