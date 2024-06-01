const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


readLine.question("Qual sua linguagem favorita? ",(language) => {
    console.log(`A minha linguagem de programação favorita é: ${language}`)
    readLine.close()
})

