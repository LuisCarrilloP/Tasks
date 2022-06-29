const { Tasks } = require("../models/tasks.model")

const { catchAsync } = require("../utils/catchAsync.util")

const getAllTasks = catchAsync( async( req, res, next ) => {
    const tasks = await Tasks.findAll()

    res.status(200).json({
        status: "sucess",
        tasks
    })
})

const createTask = catchAsync( async( req, res, next ) => {
    const { title, userId, limitDate } = req.body

    const newTask = await Tasks.create({
        title,
        userId,
        startDate: new Date(),
        limitDate
    })

    res.status(201).json({
        status: "sucess",
        newTask
    })
})

const getTaskByStatus = catchAsync( async( req, res, next ) => {
    const { status } = req.params

    if( status === "active" || "completed" || "late" || "cancelled" ){
        const info = await Tasks.findAll({ where: { status } })
        
        res.status(201).json({
            status: "sucess",
            info
        })
    }
})

const updateTask = catchAsync( async( req, res, next ) => {
    const { task } = req

    const { finishDate } = req.body 

    if(task.status === "active"){
        await task.update({ finishDate })
        let limitDate = new Date(task.dataValues.limitDate)
        let finishDateUser = new Date(finishDate)

        if(finishDateUser.valueOf() < limitDate.valueOf()){
            res.status(200).json({
                status: "sucess",
                message: "Late",
                task
            })
        }
    }
})

const cancelTask = catchAsync( async( req, res, next ) => {
    const { task } = req

    await task.update({ status: "Cancelled" })

    res.status(200).json({
        status: "succes",
        message: "The task was cancelled",
        task
    })
})

module.exports = { getAllTasks, createTask, getTaskByStatus, updateTask, cancelTask }