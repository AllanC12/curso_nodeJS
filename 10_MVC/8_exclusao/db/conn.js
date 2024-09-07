const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('nodemvc','root','',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = sequelize