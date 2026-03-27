const fs=require('fs');
const path=require('path');
 


const fileName=path.join(__dirname,"batein.txt")

fs.writeFileSync(fileName,"Hi hello kaise ho chale Date pe",(data,err)=>{
   

    console.log("writen")
})

console.log("im waiting for it to get excuted")