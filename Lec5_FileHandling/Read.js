const fs= require('fs')

const path=require('path');

const fileName=path.join(__dirname,"saifu.txt")

fs.readFile(fileName,'utf-8',(err,data)=>{
    if(err){
        throw err;
    }
    console.log(data)
})