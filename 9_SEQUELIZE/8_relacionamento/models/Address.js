const { type } = require("os");
const { DataTypes } = require("sequelize");

const People = require('./People')
const database = require('../database/conn')

const Address = database.define("Address", {
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Address.belongsTo(People)

module.exports = Address
