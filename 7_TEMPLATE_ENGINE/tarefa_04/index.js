const express = require('express')
const app = express()

const port = 5000

const exphbs = require('express-handlebars')
const { title } = require('process')

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars',hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

const products = [
    {
        id: '1',
        title: 'Teclado',
        price: 50.00
    },
    {
        id: '2',
        title: 'mouse',
        price: 30.00
    },
    {
        id: '3',
        title: 'Cadeira',
        price: 300.00
    },
    {
        id: '4',
        title: 'Mesa',
        price: 500.00
    }
]

app.get('/products/:id',(req,res) => {
    const id = req.params.id
    const product = products[parseInt(id - 1)]
    console.log(product)
    res.render('productSingle',{product})
})

app.get('/',(req,res) => {

    res.render('products',{products})
})



app.listen(port , (req,res) => {
    console.log(`app rodando na porta ${port}`)
})