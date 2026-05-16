

async  function isLoggedin(req,res,next){
    if(req.user){
       next()
    }
    else{
        req.flash('error','you need to login first')
        res.redirect('/login')
    }
}

module.exports={isLoggedin};