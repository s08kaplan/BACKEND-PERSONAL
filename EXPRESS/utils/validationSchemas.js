const userValidationSchema = {
    username: {
        isLength: { 
            options: { min: 5, max: 20},
            errorMessage: "User name must be at least 3 and maximum 20 characters"
        },
        notEmpty: {
            errorMessage: "Please enter your username"
        },
        isString: {
            errorMessage: "User name must be string"
        }
    },
    firstName: {
        notEmpty: true
    }
}

module.exports.userValidationSchema