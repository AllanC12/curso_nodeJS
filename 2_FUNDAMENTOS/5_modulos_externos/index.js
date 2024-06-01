const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const name = args['nome']

console.log(name)

const profissão = args['profissão']

const phrase = `Meu nome é ${name} e sou ${profissão}`

console.log(phrase)