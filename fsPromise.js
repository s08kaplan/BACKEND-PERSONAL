const fs = require("node:fs/promises")

fs.readFile("file-1.txt","utf-8")
.then(data => console.log(data))
.catch(error => console.log(error))


async function readFile() {
    try {
       const data = await fs.readFile("greet.txt", "utf-8") 
       console.log(data);
    } catch (error) {
        console.log(error);
    }
}

readFile()