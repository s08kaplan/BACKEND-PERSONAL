"use strict";

const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    content: {
        type:String,
        trim:true,
        required:true
    }
  },
  {
    collection: "blogPost",
    timestamps: true,
  }
);

module.exports = {
    BlogPost: mongoose.model("BlogPost", blogPostSchema)
}