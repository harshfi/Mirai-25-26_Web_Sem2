const express=require('express');
const router=express.Router();
const Product=require('../models/product');

router.get('/products',async (req,res)=>{
    const products=await Product.find({});

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

router.get('/products/new', (req,res)=>{

    res.render('products/new.ejs')
})

router.post('/products/create', async (req,res)=>{

    try{
          const {name,price,img,desc}=req.body;

     const p= await Product.insertOne({name,price,img,desc});

       res.redirect('/products');
    }
    catch(e){
        res.status(500).send("error")
    }
    
   

})

router.get('/products/:id/edit', async(req,res)=>{
    const {id}= req.params;
    const product= await Product.findById(id);

    res.render('products/edit.ejs',{product})
})

router.post('/products/:id/edit', async(req,res)=>{
    const {id}= req.params;
    const {name,price,img,desc}=req.body;
    const product= await Product.findOneAndUpdate({_id:id},{name,price,img,desc});

     res.redirect(`/products/show/${id}`)

})

router.delete('/products/:id/delete',async(req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products')
})



module.exports=router;