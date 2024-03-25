"use strict"

const { mongoose: { Schema, model}} = require("../config/dbConnection")

const ToppingSchema = new Schema({

    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
    collection: "toppings",
    timestamps: true
})

module.exports = model("Topping", ToppingSchema)