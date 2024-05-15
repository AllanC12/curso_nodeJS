const url = require('url')

const address = 'http://www.meusite.com/catalog?products=cadeira&objects=mesa'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.hostname)
console.log(parsedUrl.searchParams.get('products'))
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
