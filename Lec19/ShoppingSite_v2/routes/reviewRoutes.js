const express=require('express')
const router=express.Router();
const Product=require('../models/product')
const Review=require('../models/reviews')



router.post('/products/:id/reviews',async (req,res)=>{
    const {id}= req.params;
    const {rating,comment}=req.body;
    const product=await Product.findById(id);
    const review= await Review.insertOne({rating,comment})
    
    product.reviews.push(review);

    await product.save();

    res.send(review);

})



module.exports=router;









