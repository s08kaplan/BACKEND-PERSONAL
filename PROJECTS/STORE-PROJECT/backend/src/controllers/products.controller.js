"use strict"

require("express-async-errors")
const Products = require("../models/products.model")

module.exports = {

    list: async (req, res) => {
        const data = await res.getModelList(Products)
        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Products),
            data
        })

    },
    create: async (req, res) => {
        const { isAdmin } = req.body
        if(isAdmin) {
           const data = await Products.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data
        })  
        }else {
            res.status(401).send({
               error: true,
               message: "You must be Admin to do this operation"
            })
        }
       
    },
    read: async (req, res) => {
       const data = await Products.findOne({ _id: req.params.productId})
       res.status(202).send({
        error: false,
        data
       })
    },
    update: async (req, res) => {
       const data = await Products.updateOne({ _id: req.params.productId}, req.body)
       const updatedData = await Products.findOne({ _id: req.params.productId})
       res.status(202).send({
        error: false,
        body: req.body,
        data,
        updatedData
       })
    },
    delete: async (req, res) => {
       const data = await Products.deleteOne({ _id: req.params.productId})
       res.sendStatus((data.deletedCount >=1) ? 204 : 404)
    },
}