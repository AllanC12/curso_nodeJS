const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const basePath = path.join(__dirname,'templates')
// path (coremodule para acessarmos diretórios)
// __dirname se refere ao diretório atual

app.get('/',(req,res) => {
   res.sendFile(`${basePath}/index.html`)
})

app.listen(port,() => {
    console.log(`app rodando na port ${port} `)
})