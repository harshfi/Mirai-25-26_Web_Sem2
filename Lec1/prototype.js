
let arr=[1,2,3,4,5];

let dp=[4,5,6]

Array.prototype.sum= function(){
    let sum=0;
    for(let i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}

console.log(arr.sum());

// let arr= new Array(1,2,3,4,5);

console.log(Array.prototype)