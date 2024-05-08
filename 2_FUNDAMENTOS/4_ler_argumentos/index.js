//name

console.log(process.argv)

const args = process.argv[2]

console.log(args)

const name = args.split('=')[1]

console.log(name)

const idade = process.argv[3].split('=')[1]

console.log(`Meu nome é ${name} e possuo ${idade} anos de idade`)
