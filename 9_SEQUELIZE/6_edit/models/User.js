const {DataTypes} = require('sequelize')
const connection = require('../database/connection')

const User = connection.define('User',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
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