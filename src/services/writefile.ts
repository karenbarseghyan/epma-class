import * as fs from 'fs'

const output = fs.createWriteStream('../data/main.txt')

output.on('finish', ()=> {
    console.log('input finish')
} )