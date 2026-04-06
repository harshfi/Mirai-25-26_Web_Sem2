const express = require('express');

const app= express();



app.get('/', (req,res)=>{

    res.send("this is home page")

})

app.get('/about',(req,res)=>{
    res.send("this is about page")
})

app.get('/contact',(req,res)=>{
    res.send("this is contact page")
})

app.get('/services',(req,res)=>{
    res.send("this is services page")
})

app.get('/products',(req,res)=>{
   
    const {name,price}= req.query//destructuring
    console.log(req.query)
    res.send("this is products page "+name+" with price "+price)

})

app.get('/users/:id',(req,res)=>{
    const {id}= req.params
    res.send("this is user page for user with id "+id)
})
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})