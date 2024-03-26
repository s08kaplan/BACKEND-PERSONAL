"use strict";

const {
  mongoose: { Schema, model },
} = require("../config/dbConnection");

const PizzaSchema = new Schema(
  {
    toppingIds: [{
      type: Schema.Types.ObjectId,
      ref: "Topping",
      
    }],

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
      type: Number,
      required: true,
    }
  },
  {
    collection: "pizzas",
    timestamps: true,
  }
);

module.exports = model("Pizza", PizzaSchema)