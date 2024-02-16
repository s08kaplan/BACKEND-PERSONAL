const  http = require("node:http")
const {calculation, date} = require("./myModule")


const server = http.createServer((req,res)=> {
   res.writeHead(200,{"Content-Type":"text/html"}) 
   res.end(`<h1>${calculation(2,5,"*").toString()}</h1>
   <h2>${date}</h2>
   ` )
})

server.listen(3000,() => {
    console.log("your module is working well!...");
})
