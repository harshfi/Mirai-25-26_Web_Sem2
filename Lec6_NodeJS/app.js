const express= require('express');

const app=express();

app.get('/',function (req,res){
    res.send("Hello World")
})

app.listen(4444,function (){
    console.log("server is running on port 4444")
})

