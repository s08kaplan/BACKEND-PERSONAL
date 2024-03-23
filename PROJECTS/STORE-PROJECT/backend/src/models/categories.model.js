"use strict"


const { Schema, model} = require("../config/dbConnection")

const CategorySchema = new Schema({

    name:String
},
{
    collection: "categories",
    timestamps: true
})

module.exports = model("Category", CategorySchema )