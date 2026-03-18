
let a={
    name:"Ritik",
    age: 22,
}

let p={
    phn: 1234567890,
    college: "IIT BHU",
}

a.__proto__=p;

console.log(a.college);

let c={
    city: "Varanasi",
    state: "UP",

}
p.__proto__=c;

console.log(a.city);