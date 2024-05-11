const fs = require('fs')

console.log('inicio')

fs.writeFile('testeAsync.txt','teste de criação assíncrona', (err) =>{
   setTimeout(() => {
      console.log('arquivo criado com sucesso!!!')
   }, 2000);
})

console.log('fim')