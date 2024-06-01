//externo
const minimist = require('minimist')

//interno
const sum = require('./sum.js').sum

const args = minimist(process.argv.splice(2))

const a = args["a"]
const b = args["b"]

sum(a,b)