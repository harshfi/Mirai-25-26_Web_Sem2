const fs= require('fs')

const path=require('path');

const fileName=path.join(__dirname,"saifu.txt")


let data=fs.readFileSync(fileName,'utf-8')


console.log(data)