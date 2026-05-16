const express=require('express')
const router=express.Router();
const Product=require('../models/product')
const Review=require('../models/reviews')
const {isLoggedin}= require('../middlewares')



router.post('/products/:id/reviews',isLoggedin,async (req,res)=>{
    const {id}= req.params;
    const {rating,comment}=req.body;
    const product=await Product.findById(id);
    const review= await Review.insertOne({rating,comment})
    
    product.reviews.push(review);

    await product.save();

    req.flash('success',"review add successfully")

    res.redirect(`/products/show/${id}`);

})

router.delete('/products/:pid/reviews/delete/:rid',isLoggedin, async(req,res)=>{
    const {pid,rid} =  req.params;
    console.log(pid,rid);
    // console.log(req.get('Referer'))
    // console.log(req.originalUrl)
    await Review.findByIdAndDelete(rid)
    req.flash('error',"review deleted successfully")
    // console.log(pid,rid);
    res.redirect(`/products/show/${pid}`)
})



module.exports=router;









