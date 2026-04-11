const express= require('express');

const app = express();
const uuidv4 = require('uuid').v4;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

let todos = [];

//data ={
//    id:1,
//    task="gym"
//     status="true"
//}

app.get('/',(req,res)=>{
    // console.log()
    res.send("Welcome to the TODO API")
})

app.post('/addTask',(req,res)=>{
    const {task} =req.body;
     const newTask= {
        id: uuidv4(),
        task:task,
        status:false
     }
     todos.push(newTask);

     res.send({
        status:"task has been added successfully",
        newTask
})
})

app.get('/getTasks',(req,res)=>{
    res.send(todos);
})


 



app.listen(3000,()=>{
    console.log("server has been started on port 3000")
})
