const fs=require('fs/promises')

const path=require('path');

const fileName=path.join(__dirname,"krishna.txt")


fs.readFile(fileName,'utf-8')
.then((data)=>{
    
    console.log(data)
})
.catch(err=>{
    console.log(err)
})