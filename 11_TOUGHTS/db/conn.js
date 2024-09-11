const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('toughts','root','',{
    host: 'localhost',
    dialect:'mysql'
})

try {
    sequelize.authenticate()
    console.log('database conneted successfully!!!')
} catch (error) {
    console.log(error)
    console.log('error of database connection')
}

module.exports = sequelize