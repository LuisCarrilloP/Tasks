const express = require("express")

const { createUserValidator } = require("../middlewares/userValidator.middleware")

const { userExist } = require("../middlewares/userExist.middleware")

//Import users controllers
const {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller")

const userR = express.Router()

userR.get("/", getAllUsers)
userR.post("/", createUserValidator, createUser)
userR.patch("/:id", userExist, updateUser)
userR.delete("/:id", userExist, deleteUser)

module.exports = { userR }