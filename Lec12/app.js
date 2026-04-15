const express= require('express');
const app=express();

app.use(express.json());
app.use(
    express.urlencoded({ extended: true }));


let obj={
    total:50,
    books: {
        hcv:5,
        irodov:3,
        krotove:7,
        math:2,
        chemistry:1
    },
    members: ["Harsh","padma","ritik","sharafat","teju bhaiya","nakul"],
    borrowedList: [] 

}

app.get('/',(req,res)=>{
    console.log("hi")
    res.send('welcome to library managment system');
})

app.get('/allMember',(req,res)=>{
    res.send(obj.members)
})


app.post('/addMember',(req,res)=>{
    const {name}= req.body;

    obj.members.push(name);

    res.send("member have been added successfully");
})

app.post('/deleteMember',(req,res)=>{
    const {name} =req.body;

    let newMember= obj.members.filter((i)=> i!==name)

    obj.members=newMember

    res.send({
        msg:"member deleted successfully",
        modified:obj.members
    })
})

app.post('/addBook',(req,res)=>{
    const {book,qty}=req.body;

    obj.books[book]=Number(qty);

    res.send({msg:"book added successfully",
            books:obj.books
    })
})

app.post('/borrowBook',(req,res)=>{
    const {name,book} = req.body;

    if(!obj.members.includes(name)) {
        res.send("member doesnot exist!!")
        return;
    }
    if(obj.books.book===false || obj.books[book]<=0){
         res.send("book not available ")
        return;
    }

    let b={
        name:name,
        book:book,
        date:new Date().toString()
    }
    obj.books[book]--;
    obj.borrowedList.push(b);

    res.send({
        msg:"book has been succesfully issued",b})

})

app.get('/borrowed',(req,res)=>{
    res.send(obj.borrowedList)
})


app.listen(3000,()=>{
    console.log("server on ")
})