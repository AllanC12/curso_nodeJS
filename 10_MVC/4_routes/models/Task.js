const {DataTypes} = require('sequelize')

const db = require('../db/conn')
const Task = db.define('Task',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = Task