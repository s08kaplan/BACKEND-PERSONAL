"use strict"

const router = require("express").Router()
const Product = require("../controllers/products.controller")

router.route("/")
.get(Product.list)
.post(Product.create)

router.route("/:productId")
.get(Product.read)
.put(Product.update)
.patch(Product.update)
.delete(Product.delete)

module.exports = router