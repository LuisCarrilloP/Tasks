const { body, validationResult } = require("express-validator")
const { AppError } = require("../utils/appError.util")

const ckeckResult = ( req, res, next ) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        errors.array()
        const errorMsg = errors.array().map((err) => err.msg)
        const message = errorMsg.join(". ")
        return next( new AppError(message, 400))
    }

    next()
}

const createUserValidator = [
    body("name")
        .notEmpty()
        .withMessage("Name can not be empty"),
    body("email")
        .notEmpty()
        .withMessage("Please provide an email"),
    body("password")
        .isLength( { min: 8 } )
        .withMessage("Password must be at least 8 characters long")
        .isAlphanumeric()
        .withMessage("Password must containt letters and numbers"),

    ckeckResult
]

module.exports = { createUserValidator }