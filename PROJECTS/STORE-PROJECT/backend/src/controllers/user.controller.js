"use strict";

require("express-async-errors");
const User = require("../models/user.model");
const encryptedPassword = require("../helper/encryptedPassword");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(User);
    res.status(200).send({
      error: false,
      data,
    });
  },
  create: async (req, res) => {
    const data = await User.create(req.body);
    res.status(201).send({
      error: false,
      body: req.body,
      data,
    });
  },
  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);
    const updatedData = await User.findOne({ _id: req.params.userId });
    res.status(202).send({
      error: false,
      body: req.body,
      data, //! data would be updated
      updatedData, //! updated data
    });
  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
  register: {},
  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });

      if (user && user.password === encryptedPassword(password)) {
        // ! SESSION
        req.session.id = user.id;
        req.session.password = user.password;

        // ! COOKIE
        if (req.body?.informMe) {
          req.session.informMe = req.body.informMe;
          // ! SET EXPIRE TIME
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24; //! 24 four hours selected
        }
        res.status(200).send({
          error: false,
          message: "Logged in Successfully",
          user,
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("login parameters are invalid");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password must be filled");
    }
  },
  logout: {
    
  },
};
