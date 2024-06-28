const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mysql = require('mysql')

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

const port = 5000

app.get('/',(req,res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database_01'
})

conn.connect( (err) => {
    if(err){
        console.log(err)
        return
    }

    app.listen(port,() => {
        console.log(`app rodando na porta ${port}`)
    })
})