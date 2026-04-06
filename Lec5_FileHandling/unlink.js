const fs= require('fs')

const path=require('path');

const fileName=path.join(__dirname,"saifu.txt")

fs.unlink(fileName,(err)=>{
    if(err)throw err;

    console.log("deleted ")
})