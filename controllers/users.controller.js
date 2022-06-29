const { Users } = require("../models/users.model")

const { catchAsync } = require("../utils/catchAsync.util")

const getAllUsers = catchAsync( async( req, res, next ) => {
    const users = await Users.findAll()

    //process the request and bring the users
    res.status(200).json({
        status: "sucess",
        users
    })
} )

const createUser = catchAsync( async( req, res, next ) => {
    const { name, email, password } = req.body

    const newUser = await Users.create({
        name, 
        email,
        password
    })

    res.status(201).json({
        status: "sucess",
        newUser
    })
} )

const updateUser = catchAsync( async( req, res, next ) => {
    const { user } = req

    const { name, email } = req.body
    
    await user.update( { name, email } )

    res.status(201).json({
        message: "User updated",
        user
    })
} )

const deleteUser = catchAsync( async( req, res, next ) => {
    const { user } = req

    const userDeleted = await user.update({ status: "Disabled"  })

    res.status(201).json({
        status: "sucess",
        userDeleted
    })
} )

module.exports = { getAllUsers, createUser, updateUser, deleteUser }