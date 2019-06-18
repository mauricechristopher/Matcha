const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // conversions to allow the use of validator functions
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.username = !isEmpty(data.username) ? data.username : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // check names
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "Please enter your first name";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Please enter your last name";
    }
    if (Validator.isEmpty(data.username)) {
        errors.username = "Please enter a username";
    } // need to handle matching usernames and return proper error message

    // check email
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    // check passwords
    if (Validator.isEmpty(data.password)) {
        errors.password = "Please enter a password";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Please confirm your password";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
