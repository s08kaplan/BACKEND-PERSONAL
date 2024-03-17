"use strict"

const Products = require("../models/products.model")
module.exports = async (req, res, next) => {
    let existingProduct = await Products.findOne({stock_count: req.body.stock_count})
    if(existingProduct) {
       return existingProduct.stock_count++
        
    }
  next()
}