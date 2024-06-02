//modulos externos
import inquirer from "inquirer";
import chalk from "chalk";

//modulos internos
import fs from "fs";

const operation = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: ["Criar Conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      if (action === "Criar Conta") {
        createAccount();
      }else if(action === 'Consultar Saldo'){
        getAccountBalance()
      }else if(action === 'Depositar'){
        deposit()
      }else if(action === 'Sacar'){

      }else if(action === 'Sair'){
        console.log(chalk.bgBlueBright.black('Obrigado por usar o ACCOUNTS!'))
        process.exit()
      }
    })
    .catch((err) => console.log(err));
};
operation();

const createAccount = () => {
  console.log(
    chalk.bgGreen.black("Parabéns por se cadastrar no nosso banco!!!")
  );
  console.log(chalk.green("Defina as opções da conta a seguir"));

  buildAccount();
};

const buildAccount = () => {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Digite um nome para sua conta:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }

      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black(
            "Esta conta ja existe , por favor tente outro nome!"
          )
        );
        buildAccount();
        return;
      }

      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        (err) => {
          console.log(err);
        }
      );

      console.log(chalk.bgGreen.black('Parabéns, sua conta foi criada!!!'))

      operation()
    });
};

const deposit = () => {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Em qual conta deseja depositar?'
    }
  ]).then(answer => {
    const accountName = answer['accountName']

    if(!checkAccount(accountName)){
      return deposit()
    }

    inquirer.prompt([{
      name: 'amount',
      message: 'Quanto você deseja depositar?'
    }]).then(answer => {
      const amount = answer['amount']

      if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, por favor tente mais tarde...'))
        return deposit()
      }

     addAmount(accountName,amount)
     operation()

    }).catch(err => console.log(err))

  }).catch(err => {
    console.log(err)
  })
}

const checkAccount = (accountName) => {
  if(!fs.existsSync(`accounts/${accountName}.json`)){
    console.log(chalk.bgRed.black('Nenhuma conta encontrada com este nome...'))
    return false
  }

  return true
}

const addAmount = (accountName,amount) => {
  const accountData = getAccount(accountName)
  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)
  
  fs.writeFileSync(`accounts/${accountName}.json`,JSON.stringify(accountData),(err) => {
    console.log(err)
  })

  console.log(chalk.bgGreen.black(`Foi depositado um valor de R$${amount} na sua conta!`))
}

const getAccount = (accountName) => {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
    encoding: 'utf8',
    flag: 'r'
  })

  return JSON.parse(accountJSON)
}

const getAccountBalance = () => {
  inquirer.prompt([
    {
      name: 'accountName',
      message: 'Qual o nome da sua conta?'
    }
  ]).then(answer => {
    const accountName = answer['accountName']

    if(!checkAccount(accountName)){
      return getAccountBalance()
    }

    const { balance } = getAccount(accountName)

    console.log(chalk.bgBlue.black(`O saldo da sua conta é de R$${balance}`))

    operation()

  }).catch(err => console.log(err))
}

