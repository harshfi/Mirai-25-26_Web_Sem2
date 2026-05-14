const express= require('express');
const app= express();
const cookieParser=require("cookie-parser");
const session = require('express-session')


app.use(session({
  secret: 'thisismybekarwalkey',
  resave: false,
  saveUninitialized: true,
  
}))




app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/count',(req,res)=>{

    if(!req.session.count)req.session.count=1;

    else{
        req.session.count+=1
    }
    res.send("you visted this page "+req.session.count)
})








app.listen(3000,()=>{
    console.log('server is running at 3000')
})