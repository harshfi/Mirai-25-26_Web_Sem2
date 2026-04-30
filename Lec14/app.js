const mongoose= require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Product')
.then(()=>{
    console.log('db connected')
})
.catch(()=>{
    console.log("malik torhi galti ho gaye ")
})

// const productSchema= new mongoose.Schema({
//     name:String,
//     price:Number,
//     img:String
// })



const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    price:Number,
    img:String
})

const Product=mongoose.model("Product",productSchema);

// const p1=new Product({name:"camera",price:123,img:"hjhsx"});
// const p2=new Product({name:"harsh",price:123,img:"hjhsx"});

// console.log(p1);

//  Product.create({name:"camera",price:123,img:"hjhsx"})
//  .then(()=>{
//     console.log("data feeded")
//  })

// async function data(){
//    const data =await Product.find({name:"camera"});
//   console.log(data)
  
// }


// data();



async function deletee(){
    //  await Product.deleteOne({_id:'69f1a9cc1b543ba31fb84ca6'});

    await Product.findByIdAndDelete('69f1ad93868db523df9c08e7');
     console.log("data deleted")
}

deletee()




//  p2.save()
//  .then(()=>{
//    console.log('data is saved in the db')
//  })


// "      phone     "