const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const taskRoutes = require('./routes/taskRoutes')

const conn = require('./db/conn')
const port = 3333

app.set('view engine','handlebars')
app.engine('handlebars',exphbs.engine())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks',taskRoutes)

conn.sync().then(() => {
  app.listen(port,() => {
    console.log(`app running on port ${port}`)
  })
}).catch((err) => {
    console.log(err)
})

