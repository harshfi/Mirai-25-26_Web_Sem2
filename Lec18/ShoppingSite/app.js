const express= require('express');
const app=express();
const EjsMateEngine = require('ejs-mate');
const mongoose=require('mongoose');
const seed=require('./seed');
const ProductRoutes=require('./routes/productRoutes')
const path=require('path')


mongoose.connect('mongodb://localhost/ShoppingCart')
.then(()=>{
    console.log('db connected');
})

// seed()
app.engine('ejs', EjsMateEngine);

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))

app.use(ProductRoutes)



app.get('/',(req,res)=>{
    res.send("everything is fine")
})






app.listen(3000,()=>{
    console.log('ho gaya connect')
})