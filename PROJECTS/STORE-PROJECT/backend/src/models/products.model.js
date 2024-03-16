"use strict"

const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({

    category: {
        type: String,
        trim : true,
        required : [ true,"Please enter the category name "],
    },

    title: {
        type: String,
        trim: true,
        required: [true, "Please enter the product' title"]
    },
    description: {
        type: Text,
        trim: true,
        required : [true, "Don't forget to mention the product' properties"]
    },

    brand: {
      type: String,
      trim: true,
      required: [true, "Please enter the brand name"]
    },

    price: {
      type: Integer,
      trim: true,
      required: [true, "Forgot to enter the price!!!"]
    },

    discountPercentage: {
        type: Integer,
        trim: true,
    },
    stock: {
       type: Integer,
       trim: true,
    },

    images: {
        type:[String],
        required: [true, "Please add the product' image "]
    }

},
{
    collection: "products",
    timestamps: true
})

module.exports = mongoose.model("Products", ProductSchema)