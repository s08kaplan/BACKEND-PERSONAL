"use strict"

const { mongoose: { Schema, model}} = require("../config/dbConnection")

const OrderSchema = new Schema({
userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true,
    unique: true,
},
pizzaId: {
    type: Schema.Types.ObjectId,
    ref: "Pizza",
    required: true,
    unique: true,
},
size: {
    type: String,
    trim: true,
    required: true,
},
quantity: {
    type: Number,
    trim: true,
    required: true
},

price: {
type: Decimal128,
trim: true,
required: true
},

amount: {
    type: Decimal128,
    trim: true,
    required: true
}
}, {
    collection: "orders",
    timestamps: true
})

module.exports = model("Order", OrderSchema)