const express = require("express")

const { createTaskValidator } = require("../middlewares/taskValidator.middleware")

const { taskExist } = require("../middlewares/taskExist.middleware")

const {
    getAllTasks,
    createTask,
    getTaskByStatus,
    updateTask,
    cancelTask
} = require("../controllers/tasks.controller")

const taskR = express.Router()

taskR.get("/", getAllTasks)
taskR.post("/", createTaskValidator, createTask)
taskR.get("/:status", getTaskByStatus)
taskR.patch("/:id", taskExist, updateTask)
taskR.delete("/:id", taskExist, cancelTask)

module.exports = { taskR }