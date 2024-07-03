const express = require('express')
const app = express()
const mysql = require('mysql')
const exphbs = require('express-handlebars')

const port = 5000

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_01'
})

conn.connect((err) => {
    if(err){
        throw new Error(err)
    }

    app.listen(port,() => {
        console.log(`app rodando na porta ${port}`)
    })
})