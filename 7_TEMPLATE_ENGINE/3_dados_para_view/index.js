const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 4000

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/',(req,res) => {
    const user = {
        name: "Allan",
        surname: "Cândido"
    }

    res.render('home', {user})
})

app.listen(port,() => {
    console.log(`app rodando na porta ${port}`)
})