const express= require('express')
const app=express();
// const ejs=require('ejs')
const path=require('path')


const mongoose=require('mongoose')
const User=require('./user.js')
const bcrypt=require('bcrypt')

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))
app.use(express.urlencoded({extended:true}))


let loggedin=false;


mongoose.connect('mongodb://localhost/User')
.then(()=>{
    console.log('db has been connected')
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.get('/signup',(req,res)=>{
    res.render('signup.ejs');
})

app.post('/signup',async(req,res)=>{
    const {name,email,password}= req.body;

    await   bcrypt.hash(password, 10, async function(err, hash) {
    await  User.insertOne({name,email,password:hash})
});

res.redirect('/login')

})

app.post('/login', async(req,res)=>{
   const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user){
        const checkpass= await bcrypt.compare(password, user.password);
        
        loggedin=checkpass;
        res.send(checkpass?"your are loggedin ": "wrong password")
    }
    else{
        res.send("user doesnot exisit")
    }
})

app.get('/secure',loggin,(req,res)=>{
    res.send("this is secure page");
})


function loggin(req,res,next){
    if(loggedin) next()
    else return res.send("you need to login first" );
}


app.listen(3000,()=>{
    console.log('server has been started')
})