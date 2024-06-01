const fs = require('fs')

fs.unlink('arquivo.txt',(err) => {
    if(err) throw new Error(err)

    console.log('arquivo removido com sucesso!!!')
})