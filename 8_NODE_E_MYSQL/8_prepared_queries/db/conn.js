const mysql = require('mysql')
const conn =  mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_01',
    connectionLimit: 10
})

module.exports = conn