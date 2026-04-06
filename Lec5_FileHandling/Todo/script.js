const fs=require('fs');
const path=require('path');

const fileName=path.join(__dirname,"data","task.json");
class Todo{
    static addTask(task){
        
        let data=fs.readFileSync(fileName,'utf-8')
        data=JSON.parse(data);
        data.push(task);
        data=JSON.stringify(data);

        fs.writeFileSync(fileName,data);

    }
    static removeTask(task){
         let data=fs.readFileSync(fileName,'utf-8')
         data=JSON.parse(data);
         data=data.filter(t=>t!=task)
        
          data=JSON.stringify(data);

        fs.writeFileSync(fileName,data);


    }
    static getAllTask(){

    }
}

// Todo.addTask("Gym");
Todo.addTask("hockey");

Todo.removeTask("Gym");

