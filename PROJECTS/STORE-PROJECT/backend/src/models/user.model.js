"use strict"

const mongoose = require("mongoose")
const isValidEmail = require("../helper/isValidEmail") //? email validation function required
const encryptedPassword = require("../helper/encryptedPassword")
const UserSchema = new mongoose.Schema({
 

    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Email can not be empty"],
      set: (email) => isValidEmail(email)
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: (password) => encryptedPassword(password)
    },

    username: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Please check your username again"]

    },

    firstName: {
        type: String,
        trim: true,

    },

    lastName: {
        type: String,
        trim: true,

    },

    image: String,
    bio: String,
    isAdmin : {
        type: Boolean,
        default: false
    }
},
{
    collection: "user",
    timestamps: true
})


module.exports = mongoose.model("User", UserSchema)
