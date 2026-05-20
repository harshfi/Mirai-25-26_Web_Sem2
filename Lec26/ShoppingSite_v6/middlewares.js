
const Product=require('./models/product.js')

async  function isLoggedin(req,res,next){
    if(req.user){
       next()
    }
    else{
        req.flash('error','you need to login first')
        res.redirect('/login')
    }
}

async function isSeller(req,res,next){
    if(req.user.role=="Seller"){
        next();
    }
    else{
        req.flash('error',`you don't have ther permission`)
        return res.redirect('/products') 
    }
}

async function isCreator(req,res,next){
    const product_id=req.params.id;
    const product= await Product.findById(product_id);
    console.log(product.author._id,"this is the id");
    if(product.author && req.user._id.equals(product.author._id)){
        next();
    }
    else{
         req.flash('error',`you don't have ther permission`)
         return res.redirect('/products') 
    }
}




module.exports={isLoggedin,isSeller,isCreator};