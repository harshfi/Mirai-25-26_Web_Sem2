const express= require('express');
const app=express();
const EjsMateEngine = require('ejs-mate');
const mongoose=require('mongoose');
const seed=require('./seed.js');
const ProductRoutes=require('./routes/productRoutes.js')
const ReviewRoutes=require('./routes/reviewRoutes.js')
const path=require('path')
const methodOverride = require('method-override')
const session = require('express-session')
const cookieParser=require("cookie-parser");
const flash = require('connect-flash');
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./models/user.js");
const AuthRoutes=require('./routes/auth.js')



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
app.use(methodOverride('_method'))


app.use(cookieParser("thisisnotagoodscreatekey"));
 app.use(session({
   secret: 'thisismybekarwalkey',
   resave: false,
   saveUninitialized: true,
   
 }))
 

app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
 
app.use(flash());

app.use((req,res,next)=>{
   res.locals.currentUser=req.user;
   res.locals.success = req.flash('success');
   res.locals.error=req.flash('error')
   next();
})


app.use(ProductRoutes)
app.use(ReviewRoutes)
app.use(AuthRoutes);



app.get('/',(req,res)=>{
    req.flash('welcome',"you are welcome")
    res.redirect('/products')
})






app.listen(3000,()=>{
    console.log('ho gaya connect')
})