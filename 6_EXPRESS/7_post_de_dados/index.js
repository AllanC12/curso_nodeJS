const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const basePath = path.join(__dirname,'templates')
// path (coremodule para acessarmos diretórios)
// __dirname se refere ao diretório atual

app.use(
   express.urlencoded({
      extended: true
   })
)

app.use(express.json())

app.get('/users/add', (req,res) => {
   res.sendFile(`${basePath}/usersForm.html`)
})

app.post('/users/save',(req,res) => {
   console.log(req.body)
   const {name,age} = req.body
   console.log(name,age)
   res.sendFile(`${basePath}/usersForm.html`)
})

app.get('/users/:id', (req,res) => {
   const id = req.params.id
   
   res.sendFile(`${basePath}/users.html`)

   console.log(`Buscando usuário: ${id}`)
})

app.get('/',(req,res) => {
   res.sendFile(`${basePath}/index.html`)
})

app.listen(port,() => {
    console.log(`app rodando na port ${port} `)
})