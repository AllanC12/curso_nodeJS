const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Task = db.define('Task', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        required: true,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = Task
