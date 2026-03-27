const fs=require('fs/promises')
const path=require('path');

const fileName=path.join(__dirname,"song1.txt");


fs.writeFile(fileName,"padh lo becuf bacho")
 .then(()=>{
    console.log("file toh chal chuki")
 })
 .catch((err)=>{
    console.log(err);
 })

 console.log("File jab hoga tab hoga im notr goint to wait for it");