const {DataTypes} = require('sequelize')
const connection = require('../database/conn')
const People = require('./People')

const Address = connection.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Address.belongsTo(People)

module.exports = Address