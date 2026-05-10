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

    res.redirect(`/products/show/${id}`);

})

router.delete('/products/:pid/reviews/delete/:rid', async(req,res)=>{
    const {pid,rid} =  req.params;
    console.log(pid,rid);
    // console.log(req.get('Referer'))
    // console.log(req.originalUrl)
    await Review.findByIdAndDelete(rid)
    // console.log(pid,rid);
    res.redirect(`/products/show/${pid}`)
})



module.exports=router;









