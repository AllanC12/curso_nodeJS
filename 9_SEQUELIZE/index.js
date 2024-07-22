const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const port = 2000

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())


app.get('/',(req,res) => {
    res.render('home')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})