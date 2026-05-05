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
// seed();

app.get('/',async(req,res)=>{
    const allMovies= await Movie.find();

    // res.send(allMovies);

    res.render('index.ejs',{allMovies})
})

app.get('/trending',async (req,res)=>{
    //allmovie->(_id,avg)->avgRating Sort -> top(5)->id ->5;
    const trend= await getTrending();
    let m=[];
    for(let i=0;i<trend.length;i++){
       let id= trend[i].id;
       const moive= await Movie.findById(id);
       m.push(moive);
    }

   

    res.render('trending.ejs',{m});
    
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

app.get('/edit/:id',async(req,res)=>{
    const {id}=req.params;
    const m=await Movie.findById(id);

    res.render('edit.ejs',{m});
})


app.put('/edit/:id',async(req,res)=>{
    const {id}=req.params;

    const {name,year,img,desc}=req.body;

    await Movie.findByIdAndUpdate(id,{name,year,img,desc});

    res.redirect(`/movies/${id}`);

})


app.post('/rating/:id',async(req,res)=>{
    const {id}=req.params;
    const {rating,comment}=req.body;

    const m= await Movie.findById(id);
    m.reviews.push({rating,comment});
    await m.save();

    console.log(m);

    res.redirect(`/movies/${id}`);
})

async function getTrending(){

    // const m=await Movie.find({reviews:{$ne:[]}});//this can also be the solution
    const m=await Movie.find({});

    let trendingMovie=[];

    for(let i=0;i<m.length;i++){
       
        if(m[i].reviews.length==0)continue;
        
        const avg=(m[i].reviews.reduce((sum,r)=>sum+r.rating,0))/m[i].reviews.length;

        trendingMovie.push({id:m[i]._id,avg:avg});

    }
    trendingMovie.sort((a,b)=>b.avg-a.avg);//
    //  console.log(trendingMovie)
    if(trendingMovie.length>5) return trendingMovie.slice(0,5);
    else return trendingMovie;
}

   


app.listen(3000,()=>{
    console.log('server has started')
})