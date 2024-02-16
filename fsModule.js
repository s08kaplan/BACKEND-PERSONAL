const fs = require("node:fs")
console.log("first read this line(2) then line5");
// ! synchronous
const fileContents = fs.readFileSync("./file-1.txt", "utf-8")
console.log(fileContents);

console.log("secondly read this line(7) and then the next console.log ");
// !Asynchronous

fs.readFile("./file-1.txt", "utf-8", (error,data)=>{
    if(error) {
        console.log(error);
    }else {
        console.log(data);
    }
})

console.log("thirdly this line(18) would be read and then the asynchronous part would be read(line12 or line 14)");


// ! synchronous writing method with this method the file would be created if not exists

fs.writeFileSync("./greet.txt", "Hello Abdullah keep studying to learn Nodejs")

// ! Asynchronous method

fs.writeFile("./greet.txt", ", to not to overwrite we will add the third arg next here", {flag:"a"},(error)=> {
    if(error) {
        console.log(error);
    }else {
        console.log("File written");
    }
})