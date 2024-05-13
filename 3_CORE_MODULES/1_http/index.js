const http = require('http')
const port = 3001

const server = http.createServer((req,res) => {
    res.write('Hello world in server!!!')
    res.end()
})

server.listen(port,() => {
    console.log(`Server running in port ${port}!!!`)
})