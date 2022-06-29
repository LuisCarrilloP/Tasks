const express = require( "express" )

//Routers
const { userR } = require( "./routes/users.routes" )
const { taskR } = require( "./routes/tasks.routes" )

//Global error handler
const { globalErrorHandler } = require( "./controllers/globalErrorHandler.controller" )

//Utils
const { AppError } = require( "./utils/appError.util" )

//Init express app
const app = express()
app.use(express.json())

//Endpoints
app.use("/api/v1/users", userR)
app.use("/api/v1/tasks", taskR)

//handle incoming unknown routes to the server
app.all( "*", ( req, res, next ) => {
    next( new AppError( `${req.method} ${req.originalUrl} not found in this server`, 404 ) )
})

app.use(globalErrorHandler)
module.exports = { app }