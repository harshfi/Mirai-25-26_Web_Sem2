const express =require('express');

const app= express();

const path= require('path');

const mongoose=require('mongoose');
const seed=require('./seed')
const Movie=require('./models/movies');

app.set('view engine', 'ejs');

// mongoose.connect('app.use(express.urlencoded({extended:true}));')
mongoose.connect('mongodb://127.0.0.1:27017/Movies')
.then(()=>{
    console.log('DB connected');
})


app.get('/',async(req,res)=>{
    const allMovies= await Movie.find();

    // res.send(allMovies);

    res.render('index.ejs',{allMovies})
})

// seed();


app.listen(3000,()=>{
    console.log('server has started')
})