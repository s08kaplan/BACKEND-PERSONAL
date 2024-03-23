"use strict"

const Products = require("../models/products.model")
module.exports = async (req, res, next) => {
  const { stock_count,productId } = req.body
    let existingProduct = await Products.findOne({_id: req.body.productId})
    if(existingProduct) {
       return existingProduct.stock_count++
        
    }
  next()
}