//fetch

fetch('https://fakestoreapi.com/products')
.then((res)=>{
  return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})