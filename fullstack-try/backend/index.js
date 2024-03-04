const express = require("express");
const app = express();
const router = require("express").Router();
const validator = require("express-validator");
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "127.0.0.1";

app.use(cors())

app.use(router);
const { authenticateUser, allUsersInfo } = require("./middlewares/middlewares");
router
  .route("/")
  .get((req, res) => {
    res.send({
      message: "this is the message from the get method",
      validator,
    });
  })

  .post(authenticateUser, (req, res) => {
    const { authenticatedUser } = req;
    console.log(authenticatedUser);
    res.send({
        message:`welcome to your personal page dear ${authenticatedUser.name}`,
        userInfo:authenticatedUser
    });
  });


 
  router.route("/users")
  .get(allUsersInfo,(req, res) => {
    const { allInfo } = req
    res.send({data: allInfo})
  })

app.listen(PORT, () =>
  console.log(`Server is running on http://${HOST}:${PORT}`)
);
