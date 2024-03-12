"use strict"

require("express-async-errors")

const { BlogPost } = require("../models/blog.model")

module.exports.BlogPost = {

    list: async ( req, res) => {
        const data = await BlogPost.find()
        if(!data) res.sendStatus(404)
        res.status(200).send({
            error: false,
            data
        })
    }
}