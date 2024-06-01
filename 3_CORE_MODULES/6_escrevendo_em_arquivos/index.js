const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3007

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
        fs.writeFile('name.txt',name,(err,data)=> {
            res.writeHead(302,{
                Location: '/'
            })

            return res.end()
        })
    }
})

server.listen(port,() => {
    console.log(`server running on port ${port}`)
})