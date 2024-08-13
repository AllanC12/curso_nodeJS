const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
    console.log("connected on database");
  sequelize.authenticate();
} catch (error) {
  console.log(error);
}

module.exports = sequelize;
