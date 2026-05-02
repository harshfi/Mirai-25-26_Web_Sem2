const express =require('express');

const app= express();

const path= require('path');

const mongoose=require('mongoose');
const seed=require('./seed')
const Movie=require('./models/movies');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'));

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

app.get('/new', (req,res)=>{
    res.render('new.ejs')
})

app.post('/create',async(req,res)=>{
  const {name,year,img,desc}=req.body;

//   console.log(name,year,img,desc);

  await Movie.insertOne({name,year,img,desc});

  res.redirect('/');

})

app.get('/movies/:id',async (req,res)=>{
    const {id}=req.params;
    const m=await Movie.findById(id);
    console.log(m);
    res.render('show.ejs',{m})
})

app.delete('/movie/delete/:id',async (req,res)=>{
    const {id}=req.params;

    await Movie.findByIdAndDelete(id);

    res.redirect('/')
})

// seed();


app.listen(3000,()=>{
    console.log('server has started')
})