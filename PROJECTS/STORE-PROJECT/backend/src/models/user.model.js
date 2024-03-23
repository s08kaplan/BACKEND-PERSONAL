"use strict"

const { Schema, model} = require("../config/dbConnection")
const isValidEmail = require("../helper/isValidEmail") //? email validation function required
const encryptedPassword = require("../helper/encryptedPassword") //? to encrypt the user' password
const UserSchema = new Schema({
 

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
    bio: Text,
    isAdmin : {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    }

},
{
    collection: "users",
    timestamps: true
})


module.exports = model("User", UserSchema)
