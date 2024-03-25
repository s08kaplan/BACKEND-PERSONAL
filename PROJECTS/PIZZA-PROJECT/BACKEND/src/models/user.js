"use strict"

const { mongoose:{Schema, model} } = require("../config/dbConnection")
const encryptedPassword = require("../helpers/encryptedPassword")
const emailCheck = require("../helpers/emailCheck")

const UserSchema = new Schema({

    username:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        set:(password) => encryptedPassword(password) //! encrypt password
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true,
        set:(email) => emailCheck(email) //! email is valid or not
    },
    isActive:{
        type: Boolean,
        default: true
    },
    isAdmin:{
        type: Boolean,
        default: true
    },
}, {
    collection:"users",
    timestamps: true
})

module.exports = model("User",UserSchema)