const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("node_sequelize", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log('Conexão com sequelize feita com sucesso!')
} catch (error) {
  console.log("Falha ao conectar ao banco>: " + error);
}

module.exports = sequelize;
