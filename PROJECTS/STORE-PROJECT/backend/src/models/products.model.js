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
        type: String,
        trim: true,
        required : [true, "Don't forget to mention the product' properties"]
    },

    brand: {
      type: String,
      trim: true,
      required: [true, "Please enter the brand name"]
    },

    price: {
      type: Number,
      trim: true,
      required: [true, "Forgot to enter the price!!!"]
    },

    discountPercentage: {
        type: Number,
        trim: true,
    },
    stock_count: {
       type: Number,
       trim: true,
    },

    image: {
        type:String,
        required: [true, "Please add the product' image "]
    }

},
{
    collection: "products",
    timestamps: true
})

module.exports = mongoose.model("Products", ProductSchema)