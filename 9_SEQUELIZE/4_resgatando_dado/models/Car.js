const { DataTypes } = require("sequelize");
const db = require("../database/conn");

const Car = db.define("Car", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  max_speed: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Car