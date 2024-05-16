const fs = require('fs')

const oldArch = 'prevArch.txt'
const currArch = 'newArch.txt'

fs.rename(oldArch,currArch,(err) => {
    if(err) throw new Error(err)

    console.log(`Arquivo ${oldArch} renomeado com para ${currArch}`)
})