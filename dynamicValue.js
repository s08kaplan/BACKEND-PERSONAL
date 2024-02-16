const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res) => {
    const name = "Garip"
    const lastName = "Alone"
res.writeHead(200, { "Content-Type": "text/html"})
let html = fs.readFileSync("./index.html", "utf-8")
html = html.replace("{{name}}", name)
html = html.replace("{{lastName}}", lastName)
res.end(html)
})

server.listen(3000, () => {
    console.log("keep going all is well");
})