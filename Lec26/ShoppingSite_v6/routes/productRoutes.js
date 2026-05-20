const express=require('express');
const router=express.Router();
const Product=require('../models/product.js');
const {isLoggedin,isSeller,isCreator} =require('../middlewares.js')

router.get('/products',async (req,res)=>{
    const products=await Product.find({});

    console.log(req.flash('welcome'))

    res.render('products/product.ejs',{products});
})

router.get('/products/show/:id' , async(req,res)=>{
    try{
     const {id}=req.params;
    const product=await Product.findById(id).populate('reviews');
    res.render('products/show.ejs', {product});
    }

    catch(e){
        res.status(404).render('partials/error.ejs',{error:e.message})
    }

})

router.get('/products/new', isLoggedin,isSeller, (req,res)=>{

    res.render('products/new.ejs')
})

router.post('/products/create',isLoggedin,isSeller, async (req,res)=>{

    try{
     const {name,price,img,desc}=req.body;
     const user= req.user;

     const p= await Product.insertOne({name,price,img,author:user,desc});
       
     req.flash('success',"your product has been created")
       res.redirect('/products');
    }
    catch(e){
        res.status(500).send("error")
    }
    
   

})

router.get('/products/:id/edit',isLoggedin,isCreator, async(req,res)=>{
    const {id}= req.params;
    const product= await Product.findById(id);

   

    res.render('products/edit.ejs',{product})
})

router.post('/products/:id/edit',isLoggedin,isCreator, async(req,res)=>{
    const {id}= req.params;
    const {name,price,img,desc}=req.body;
    const product= await Product.findOneAndUpdate({_id:id},{name,price,img,desc});
     req.flash('success',"your product has been edited successfully")
     res.redirect(`/products/show/${id}`)

})

router.delete('/products/:id/delete',isLoggedin,isCreator, async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id);
    req.flash('error',"your product has been deleted")
    res.redirect('/products')
})



module.exports=router;