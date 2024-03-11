"use strict"

const books = require("../controllers/book.controller") 
const router = require("express").Router()

router.route("/books")
.get(books.list)
.post(books.create)

router.route("/books/:bookId")
.get(books.read)
.put(books.update)
.patch(books.update)
.delete(books.delete)

module.exports = router