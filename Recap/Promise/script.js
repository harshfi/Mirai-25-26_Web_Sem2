
let p=new Promise( (resolve,reject)=>{
    let success=false;
    if(success){
        resolve("talking is successful");
    }
    else{
        reject("talking is failed");
    }
});


p.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

.finally(()=>{
    console.log("talking is completed");
})

