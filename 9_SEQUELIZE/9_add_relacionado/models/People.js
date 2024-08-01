const {DataTypes} = require('sequelize')
const connection = require('../database/conn')

const People = connection.define('People', {
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

module.exports = People