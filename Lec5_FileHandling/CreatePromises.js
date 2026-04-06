
const fs=require('fs/promises');

const path=require('path');

const fileName=path.join(__dirname,"krishna.txt");


fs.writeFile(fileName,"name is krishna from Delhi")
.then(()=>{
    console.log("bhai ji file ban gaye ")
})
.catch((err)=>{
    console.log(err)
})