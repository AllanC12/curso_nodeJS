//modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

//modulos internos
import fs from 'fs'


const operation = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: [
                'Criar Conta',
                'Consultar Saldo',
                'Depositar',
                'Sacar'
            ]
        }
    ]).then((answer) => {
        const action = answer['action']
        if(action === 'Criar Conta'){
            createAccount()
        }
    }).catch(err => console.log(err))
}
operation()

const createAccount = () => {
    console.log(chalk.bgGreen.black('Parabéns por se cadastrar no nosso banco!!!'))
    console.log(chalk.green('Defina as opções da conta a seguir'))

    buildAccount()
}


const buildAccount = () => {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta:'
        }
    ]).then((answer) => {
        const accountName = answer['accountName']

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(
              chalk.bgRed.black('Esta conta ja existe , por favor tente outro nome!')
            )
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`,'{"balance": 0}', (err) => {
            console.log(err)
        })
    })
}