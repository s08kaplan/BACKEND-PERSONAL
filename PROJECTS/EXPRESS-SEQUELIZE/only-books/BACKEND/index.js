"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
const HOST = process.env.HOST;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("express-async-errors")

app.use(require("./app/routes/book.routers"));

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to my Books Project"
  });
});

app.use(require("./app/middlewares/errorHandler"));

app.listen(PORT, () => console.log(`Server is running on http://${HOST}:${PORT}`))
