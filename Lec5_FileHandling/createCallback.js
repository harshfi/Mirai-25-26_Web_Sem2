const  fs=require('fs');
const path=require('path');

let fileName= path.join(__dirname,"sriprakash.txt") ;



console.log(__dirname);

fs.writeFile(fileName,"name= sriprakash jaiswal brother of boss ",(err)=>{
    if(err){
        throw err;
    }
   console.log("bhaiya file ban gaye ");
})


console.log("kam ho chuka hain bhai")