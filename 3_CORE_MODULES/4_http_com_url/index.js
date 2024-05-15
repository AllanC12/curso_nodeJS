const http = require('http')

const port = 3004

const server = http.createServer((req,res) => {

    const urlInfo = require('url').parse(req.url,true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('Content-Type','text/html')

    if(!name){
        res.end('<h1>Insira seu nome:</h1><form method="GET"><input type="tex" name="name" /> <input type="submit" value="Enviar" /></form>')
    }else{
        res.end(`<h1>Seja bem-vindo ${name}</h1>`)
    }
})

server.listen(port,() => {
    console.log(`server running on port ${port}`)
})