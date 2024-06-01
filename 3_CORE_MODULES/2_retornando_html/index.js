const http = require('http')

const port = 3002

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-type','text/html')
    res.end('<h1 style="color: red;">Título renderizando pelo servidor</h1><p>teste de update</p>')
})

server.listen(port, () => {
    console.log(`server running on ${port}`)
})