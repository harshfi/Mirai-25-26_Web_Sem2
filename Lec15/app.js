const express=require('express');
const app= express();





app.set('view engine','ejs');
app.set('views','./views');

app.get('/',(req,res)=>{
    res.render('index.ejs',{value:5,name:"Harsh"});
})



app.listen(4000,()=>{
    console.log("server started")
})