// const express = require("express")
// const app = express()

// require("dotenv").config()
// const PORT = process.env.PORT || 8000
// const HOST = process.env.HOST || "127.0.0.1"

// app.use(express())

// const {middlewareGet, middlewarePost } =require("./middlewares/index")
// app.use(middlewareGet)

// app.get("/",middlewareGet,(req, res)=> {
//     const { userInfo } = req
//     console.log(req.query.name, req.query.lastName);
//     console.log(userInfo);
//     // res.send("<h1 style='color:blueviolet; text-align:center;margin:10px'>welcome to the EXPRESS.JS world!</h1>")
//     res.send({
//         message:"welcome to the EXPRESS.JS world!",
//         name: req.query.name,
//         lastName:req.query.lastName,
//         userInfo
//     })
// })

// // app.get("/users",middlewarePost,(req, res)=> {
// //     res.send("welcome to the blog page")
// // })
// app.post("/users",middlewarePost,(req, res)=> {
//     res.send("welcome to the blog page")
// })

// const protectedRoutes = ["/users", "/personal"];
// protectedRoutes.forEach(route => {
//     app.use(route, middlewarePost);
// });
// app.listen(PORT, ()=> console.log(`server is running on http://${HOST}:${PORT}`))

// ! for middlewares if we want to use middlewares for specific situations no need to use app.use()
const express = require("express");
const app = express();
const path = require("path")

require("dotenv").config();
const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

const { middlewareGet, middlewarePost } = require("./middlewares/index");

// Apply middleware globally
app.use(express.json());

// Define routes where middlewareGet is needed
app.get("/", middlewareGet, (req, res) => {
  const { userInfo } = req;
  console.log(req.query.name, req.query.lastName);
  console.log(userInfo);
  res.send({
    message: "Welcome to the EXPRESS.JS world!",
    name: req.query.name,
    lastName: req.query.lastName,
    userInfo,
  });
});

// Apply middlewarePost only for specific routes
// app.post("/users", middlewarePost, (req, res) => {
//   res.send("Welcome to the blog page");
// });
app.get("/users", middlewarePost, (req, res) => {
//   res.sendFile(__dirname + "/router.txt");
//   res.sendFile(path.join(__dirname, "../TEAMWORK/tw-03/regex.txt"));
//   res.sendFile(path.join(__dirname, "../TEAMWORK/tw-03/index.html"));
  res.sendFile(path.join(__dirname, "./users.json"));


});

app.get("/personal", middlewarePost, (req, res) => {
  const { email, password } = req.query;
  res.send({
    message: "Welcome to the personal page",
    email: email,
    password: password,
  });
});


app.listen(PORT, () =>
  console.log(`Server is running on http://${HOST}:${PORT}`)
);
