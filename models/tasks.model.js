const { db, DataTypes } = require("../utils/database.util")

const Tasks = db.define("tasks", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    limitDate: {
        allowNull: false,
        type: DataTypes.DATE
    },
    startDate: {
        type: DataTypes.DATE
    },
    finishDate: {
        type: DataTypes.DATE
    },
    satus: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: "active"
    }
})

module.exports = { Tasks }