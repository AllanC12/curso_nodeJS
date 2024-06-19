const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 4000

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars',hbs.engine)
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

app.get('/posts',(req,res) => {
    const posts = [
        {
            title: 'Aprendendo Node.js',
            category: 'Javascript',
            body: 'Este post tem por finalidade, te ensinar node do zero ao avançado',
            comments: 4
        },
        {
            title: 'Aprendendo Python',
            category: 'Python',
            body: 'Este post tem por finalidade, te ensinar Python do zero ao avançado',
            comments: 4
        },
        {
            title: 'Aprendendo PHP',
            category: 'PHP',
            body: 'Este post tem por finalidade, te ensinar PHP do zero ao avançado',
            comments: 4
        }
    ]

    res.render('posts',{posts})
})

app.listen(port,() => {
    console.log(`app rodando na porta ${port}`)
})