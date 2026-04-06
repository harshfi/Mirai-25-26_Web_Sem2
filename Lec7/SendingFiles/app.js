const express= require('express');
const app= express();
const path=require('path');


// app.get('/',(req,res)=>{
//     // res.send("<h1 style='color:blue;'>this is my web page</h1>")
//     res.send(`<html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <h1>Sending Files</h1>
   
//     <p style="background-color: aqua;">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam illo hic eligendi ratione. Aut ipsum amet natus beatae et perferendis quos vero, aperiam consequuntur fugiat iste tempora ducimus optio rem, non eligendi veritatis fugit, nostrum quasi vitae sapiente. Cum voluptate nemo ullam numquam quasi quos optio adipisci labore, quibusdam, maxime qui, consequatur dicta? Nisi, molestiae. Nemo atque rem labore animi laborum. Dignissimos, consequuntur at veritatis eius eos libero deserunt cumque beatae placeat reiciendis ullam fugiat cum, sunt repellendus repudiandae sed excepturi. Laboriosam quibusdam, facilis veniam placeat ad at repellendus itaque tempore dolore, sint eaque ex expedita cum recusandae aut accusamus.</p>
// </body>
// </html>`)
// })

app.get('/',(req,res)=>{
    // res.sendFile('index.html')
    res.sendFile(path.join(__dirname,'index.html'))
})

//
    app.get('/style.css',(req,res)=>{
        res.sendFile(path.join(__dirname,'style.css'))
    })


app.listen(3000,()=>{
  console.log("server chal chuka hain")
})