const { body, validationResult } = require("express-validator")

const { AppError } = require("../utils/appError.util")

const ckeckResult = ( req, res, next ) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        errors.array()
        const errorMsg = errors.array().map((err) => err.msg)
        const message = errorMsg.join(". ")
        return next( new AppError( message, 404 ) )
    }

    next()
}

const createTaskValidator = [
    body("title")
        .notEmpty()
        .withMessage("Task title can not be empty"),
    body("userId")
        .notEmpty()
        .withMessage("Please provide a valid userId"),

    ckeckResult
]

module.exports = { createTaskValidator }