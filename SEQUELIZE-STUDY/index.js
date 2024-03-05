"use strict"
 const express = require("express")
 const app = express()
const { sequelize, User } = require("./Sequelize-constructor/app.js")
const { validationResult } = require("express-validator")
const { createUserValidationSchema } = require("./validationSchema/validation.js")

 require("dotenv").config()
 const PORT = process.env.PORT || 8080
 const HOST = process.env.HOST || "127.0.0.1"

 app.use(express.json())
 app.use(express.urlencoded({ extended: true}))
 require("express-async-errors")

const router = express.Router()
app.use(router)

 router.route("/")
.get(async (req, res) => {
const data = await User.findAndCountAll()
res.status(200).send({
    error: false,
    result: data
})
})




 .post(createUserValidationSchema , async (req, res, next) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).send({errors: errors.array()})
        }
        const { name, userName, email, password } = req.body
        const newUser = await User.create({name, userName, email, password})
        return res.status(201).send({
            message: "User created successfully",
            user: newUser
        })

    } catch (error) {
        console.error("Error while creating the user", error)
        next(error)
    }
 })





const { errorHandler } = require("./middlewares/middlewares.js")
app.use(errorHandler)

 app.listen(PORT, () => console.log(`SERVER is running on http://${HOST}:${PORT}`))