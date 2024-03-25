"use strict";

const {
  mongoose: { Schema, model },
} = require("../config/dbConnection");

const PizzaSchema = new Schema(
  {
    toppingId: {
      type: Schema.Types.ObjectId,
      ref: "Topping",
      trim: true,
      required: true,
    },

    name: {
      type: String,
      trim: true,
      required: true,
    },

    image: {
      type: String,
      trim: true,
      required: true,
    },
    price: {
      type: Decimal128,
      trim: true,
      required: true,
    }
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);

module.exports = model("Pizza", PizzaSchema)