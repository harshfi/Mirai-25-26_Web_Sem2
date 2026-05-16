const mongoose= require('mongoose');
const passportLocalMongoose=require("passport-local-mongoose");




const userSchema= new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    
})

userSchema.plugin(passportLocalMongoose.default);

const User=mongoose.model('User',userSchema);


module.exports=User;