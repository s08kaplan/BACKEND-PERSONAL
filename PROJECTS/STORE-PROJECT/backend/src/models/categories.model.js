"use strict"


const mongoose = require("mongoose")

const CategoriesSchema = new mongoose.Schema({
ProductsId : {
 
    type: mongoose.Schema.Types.ObjectId, //? Foreign Key
    ref: "Products",
    required: true
},
    name: String
},
{
    collection: "categories",
    timestamps: true
})

module.exports = mongoose.model("Categories", CategoriesSchema )