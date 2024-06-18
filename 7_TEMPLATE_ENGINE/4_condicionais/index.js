const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 4000

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard',(req,res) => {
    res.render('dashboard')
})

app.get('/',(req,res) => {
    const user = {
        name: "Allan",
        surname: "Cândido"
    }

    const auth = true

    res.render('home', {user, auth})
})

app.listen(port,() => {
    console.log(`app rodando na porta ${port}`)
})