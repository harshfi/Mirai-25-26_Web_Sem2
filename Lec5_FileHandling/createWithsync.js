const fs= require('fs')

const path=require('path');

const fileName=path.join(__dirname,"saifu.txt")


fs.writeFileSync(fileName,"saifu soone wala bacha",(err)=>{
    if(err){
        throw err;
    }

   else{
       console.log("kam ho gaya ")
   } 
})

console.log("file ban chuki")