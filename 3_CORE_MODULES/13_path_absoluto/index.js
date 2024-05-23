const path = require('path')

//path absoluto
console.log(path.resolve('index.txt'))

//formar path
const midfolder = 'relatorios'
const file = 'relatorio.txt'
const finalPath = path.join('/','arquivos',midfolder, file)

console.log(finalPath)
