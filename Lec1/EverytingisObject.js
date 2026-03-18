
Object.prototype.greetings=function(){
    console.log( "Hello World", this);;
}

let a=[2,4,5,6,7]

function p(){

}

console.log(a.greetings())

console.log(p.greetings())