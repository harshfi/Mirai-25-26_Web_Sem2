const express= require('express');
const app= express();
const cookieParser=require("cookie-parser");




app.use(cookieParser("thisisnotagoodscreatekey"));

app.get('/',(req,res)=>{
    res.send("hello")
})

app.get('/setCookies',(req,res)=>{
    res.cookie('fruit','apple');
    res.cookie('mode',"dark");
    res.cookie('user',"chintu lala",{signed:true});

    res.send('cookie has been set')
})

app.get('/user',(req,res)=>{
    res.cookie('user',"harsh");

    res.send("user is set")
})


app.get('/getCookies',(req,res)=>{

    console.log(req.cookies)
    res.send(req.cookies)
})

app.get('/signedCookies',(req,res)=>{

    res.send(req.signedCookies)
})




app.listen(3000,()=>{
    console.log('server is running at 3000')
})