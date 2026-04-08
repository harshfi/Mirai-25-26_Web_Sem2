
const express = require('express');

const app = express();


app.use(express.json()) // ye line isliye lagayi hain taki hum postman se json data bhej sakein aur usko read kar sakein
app.use(express.urlencoded({extended:true})) // ye line isliye lagayi hain taki hum postman se form data bhej sakein aur usko read kar sakein


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/greet',(req,res)=>{
    res.send('hello from the greet route')
})

app.post('/hello',(req,res)=>{
    const {name} =req.body;

    res.send(`hello ${name} from the post route`)
})

app.post('/auth',(req,res)=>{
    const {username, password}= req.body;

    if(username==='harsh' && password==='1234'){
        res.send("welcome to the dashboard")
    }
    else{
        res.status(401).send("invalid credentials")
    }
})

app.listen(4000,()=>{
    console.log("server chal chuka hain bhaiya")
})