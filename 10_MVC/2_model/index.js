const express = require('express')
const app = express()

const exphbs = require('express-handlebars')

const Task = require('./models/Task')

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(express.static('public'))

app.listen(4444)