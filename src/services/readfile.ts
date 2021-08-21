import * as fs from 'fs'

const stream = fs.createReadStream('../data/main.txt', {
    encoding: 'utf-8'
})

stream.on('data', (chunk: any) => {
    console.log(chunk);
    console.log("pls see read-file");
})