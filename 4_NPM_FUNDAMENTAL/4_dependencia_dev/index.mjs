import _ from 'lodash'
import chalk from 'chalk'

const a = [1,2,3,4,5]
const b = [2,4,6,8,20]

const diff = _.difference(b,a)

console.log(chalk.bgRed.bold(diff))

