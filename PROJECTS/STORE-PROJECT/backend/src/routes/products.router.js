"use strict"

const router = require("express").Router()
const Products = require("../controllers/products.controller")

router.route("/")
.get(Products.list)
.post(Products.create)

router.route("/:productId")
.get(Products.read)
.put(Products.update)
.patch(Products.update)
.delete(Products.delete)

module.exports = router