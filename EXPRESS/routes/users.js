const { Router } = require("express")
const { query, validationResult } = require("express-validator")
require("../utils/constants")
const usersRouter = Router()

usersRouter.get(
    "/users",
    query("filter")
      .isString()
      .notEmpty()
      .withMessage("You can NOT leave empty this area")
      .isLength({ min: 3, max: 10 })
      .withMessage("At least 3 maximum 10 characters please"),
    (req, res) => {
      console.log(req.query);
      const result = validationResult(req);
      const {
        query: { filter, value },
      } = req;
  
      !result.isEmpty() && res.status(400).json({ errors: result.array() });
  
      filter && value
        ? res.send(mockUsers.filter((user) => user[filter].includes(value)))
        : res.send(mockUsers);
    }
  );

  module.exports.usersRouter