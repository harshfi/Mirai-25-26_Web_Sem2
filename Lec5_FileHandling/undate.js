const fs=require('fs')

const path=require('path');

const fileName=path.join(__dirname,"krishna.txt")


let data=fs.readFileSync(fileName,'utf-8');

data=data.replace("good","bad")

fs.writeFileSync(fileName,data)