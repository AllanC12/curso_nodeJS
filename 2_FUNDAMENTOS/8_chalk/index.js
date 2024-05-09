const chalk = require('chalk')

const nota = 9

if(nota > 6){
    console.log(chalk.green('Parabens , você foi aprovado!!!'))
}else{
    console.log(chalk.bgRed('Infelizmente você não foi aprovado :('))
}