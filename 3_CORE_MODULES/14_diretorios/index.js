const fs = require('fs')

if(!fs.existsSync('./minhapasta')){
   console.log('criando pasta')
   fs.mkdirSync('./minhapasta')
}else{
   console.log('pasta ja existe')
}