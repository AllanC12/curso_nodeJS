const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3006

const server = http.createServer((req,res) => {
    const urlInfo = url.parse(req.url,true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('form.html',(err,data) => {
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        })
    }else{
        const nameNewLine = name + ',\r\n'

        fs.appendFile('listNames.txt',nameNewLine,(err,data) => {
            res.writeHead(302, {
                Location: "/"
            })
            return res.end()
        })
    }
})

server.listen(port,(err,data) => {
    console.log(`server running on port ${port}`)
})