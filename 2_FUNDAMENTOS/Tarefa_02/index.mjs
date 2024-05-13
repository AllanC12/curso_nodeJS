import inquirer from 'inquirer'
import chalk from 'chalk'

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual seu nome e sobrenome?'
    },
    {
        name: 'p2',
        message: 'Qual sua idade?'
    }
]).then(answers =>{
   const answerName = answers.p1
   const answerAge = answers.p2

   validateData(answerName, answerAge) 
})

const validateData = (name,age) => {
    if(name.split(' ').length < 2){
        throw new Error("O nome precisa estar acompanhado do sobrenome")
    }

    

    try {
      if(parseInt(age) >= 18){
        console.log(chalk.bgGreen.black(`Olá ${name}`))
      }else{
        throw new Error
      }
    } catch (error) {
        console.log(chalk.bgRed.black('Você precisa ser maior de 18 anos'))
    }
}