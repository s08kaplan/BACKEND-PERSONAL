"use strict";

const Books = require("../models/book.models");

module.exports = {
  list: async (req, res) => {
    const data = await Books.findAndCountAll();
    if (!data) res.sendStatus(404);
    res.status(200).send({
      error: false,
      message: "Book list sent successfully",
      result: data,
    });
  },
  create: async (req, res) => {
    const data = await Books.create(req.body);
    if (!data) res.sendStatus(400);
    res.status(201).send({
      error: false,
      message: "Book list created successfully",
      result: data.dataValues,
    });
  },
  read: async (req, res) => {
    const data = await Books.findByPk(req.params.bookId);
    if (!data) res.sendStatus(404);
    res.status(200).send({
      error: false,
      message: "Book list sent successfully",
      result: data,
    });
  },
  update: async (req, res) => {
    const data = await Books.findByPk(req.body, {
      where: { id: req.params.bookId },
    });
    if (!data) res.sendStatus(404);
    res.status(202).send({
      error: false,
      message: "Book list UPDATED successfully",
      body: req.body,
      updatedData: await Books.findByPk(req.params.bookId),
    });
  },
  delete: async (req, res) => {
    const data = await Books.destroy({ where: { id: req.params.bookId } });
    if (data > 0) {
      res.status(204).send({
        error: false,
        message: " Selected Book deleted successfully",
      });
    } else {
      res.errorStatusCode = 404;
      throw new Error("Not Found");
    }
  },
};
