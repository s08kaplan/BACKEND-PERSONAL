const { body } = require("express-validator")

const createUserValidationSchema = [
    body("name").notEmpty().withMessage("Name is required").isString().withMessage("Please enter your name in string type"),
    body("userName").notEmpty().withMessage("Username can not be empty").isString().withMessage("Please enter your username in string type "),
    body("email").notEmpty().withMessage("Please enter your email address").isEmail().withMessage("Please enter a VALID email address"),
    // body('password').notEmpty().withMessage('Password is required').matches(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/).withMessage('Password must be at least 8 - maximum 20 characters long and contain at least one letter, one number, and one special character')
    body("password").notEmpty().withMessage("No permission without password").isAlphanumeric().withMessage("Password must cantain only numbers and letters")
]

module.exports = { createUserValidationSchema }

// 