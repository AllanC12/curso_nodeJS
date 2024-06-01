const fs = require('fs')

fs.stat('meuarquivo.txt',(err,stat) => {
    if(err) throw new Error(err)

    console.log(stat.size)
    console.log(stat.ctime)
    console.log(stat.isFile())
    console.log(stat.isDirectory())
    console.log(stat.isSymbolicLink())
})