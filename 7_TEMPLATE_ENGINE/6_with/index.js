const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 4000

app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.get('/dashboard',(req,res) => {

    const items = ['item 1', 'item 2', 'item 3', 'item 4']

    res.render('dashboard',{items})
})

app.get('/',(req,res) => {
    const user = {
        name: "Allan",
        surname: "Cândido"
    }

    const auth = true

    res.render('home', {user, auth})
})

app.get('/post',(req,res) => {
    const post = {
        title: 'Aprendendo Node.js',
        category: 'Javascript',
        body: 'Este post tem por finalidade, te ensinar node do zero ao avançado',
        comments: 4
    }

    res.render('blogposts',{post})
})

app.listen(port,() => {
    console.log(`app rodando na porta ${port}`)
})