const mysql = require('mysql')

const conn = mysql.createPool({
    connectionLimit: 30,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_01'
})

module.exports = conn