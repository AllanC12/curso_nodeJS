const {DataTypes} = require('sequelize')
const database = require('../database/conn')

const User = database.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
})

module.exports = User