
class student {

    name;
    age;
    phn;
  constructor(name, age, phn){
   this.name = name;
    this.age = age;
    this.phn = phn;
  }
    marks(marks){
        console.log("Marks are " + marks, this);
    }
}

let student1 = new student("Alice", 20, "123-456-7890");

student1.marks(90)

console.log(student1)

student1.marks(95)

let student2 = new student("Pawan", 22, "987-654-3210");

student2.marks(85)

console.log(student2)
