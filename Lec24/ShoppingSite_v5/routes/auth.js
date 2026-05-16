const express =require('express')
const router=express.Router();
const User=require('../models/user.js')
const passport=require('passport')



router.get('/login',(req,res)=>{
    res.render('auth/login.ejs')
})

router.get('/signup',(req,res)=>{
    res.render('auth/signup.ejs')
})

router.post('/signup', async(req,res)=>{
    const {username,email,password}=req.body;

    const newUser=new User({
            username,
            email
        });
    
    const registeredUser=await User.register(newUser,password);

    res.redirect("/login");
})

router.post("/login", passport.authenticate("local", {failureRedirect:"/login",failureFlash:true }),async (req,res) => {
  req.flash('success',`welcome ${req.user.username}`)

res.redirect("/products");
    }
);


router.get("/logout", (req,res,next) => {

req.logout(function(err) {
if(err) {
return next(err);
        }

res.redirect("/");
    });

});





module.exports=router;