"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Books = sequelize.define("books", {
  bookName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ISBN: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  publishYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genres: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverImage: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Books