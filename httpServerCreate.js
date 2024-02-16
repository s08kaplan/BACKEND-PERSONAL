const http = require("node:http")

const server = http.createServer((req, res) => {
res.writeHead(200, { "Content-Type":"text/plain"})
res.end("Hello again you are on a good try keep going!")
})

server.listen(3000, () => {
    console.log("all is well Server is running on port 3000");
})

