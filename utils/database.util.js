const { Sequelize, DataTypes } = require("sequelize")
const dotenv = require("dotenv")

dotenv.config({path: "../config.env"})
const env = process.env

const db = new Sequelize({
    dialect: "postgres",
    host: env.DB_HOST,
    username: env.DB_USER,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    database: env.DB,
    logging: false //debug +-
})

module.exports = { db, DataTypes }