const {DataTypes} = require('sequelize')
const connection = require('../database/conn')

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

Address.belongsTo(Address)

module.exports = Address