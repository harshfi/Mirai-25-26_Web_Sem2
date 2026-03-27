const fs=require('fs');
const path=require('path');
 


const fileName=path.join(__dirname,"song.txt")


// (fileName,data,option,callbackFunction)
fs.writeFileSync(fileName,"tere mere kahani",{
    flag:'w'
},(err)=>{
  
    if(err)throw err;

    console.log("file has been created")
 
})


console.log("File jab hoga tab hoga im notr goint to wait for it");