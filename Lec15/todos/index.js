const express=require('express');
const app= express();




app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views','./views');

let data=[{
    task:"Gym",
    desc:"legs heavy wala workout"
},{
    task:"name Kormangla",
    desc:"will eat pasta and chiken birayani"
}
]

app.get('/',(req,res)=>{
    res.render('index.ejs',{data:data});
})

app.post('/addTask',(req,res)=>{
    const {task,desc}=req.body;
    let obj={
        task,desc
    }

    data.push(obj);

    res.redirect('/')
})

app.listen(4000,()=>{
    console.log("server started")
})