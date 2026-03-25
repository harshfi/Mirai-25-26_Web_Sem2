
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

console.log(ctx)

canvas.width = 600;
canvas.height = 400;

//draw a line

ctx.beginPath();

ctx.moveTo(20,20);
ctx.lineTo(200,100);

ctx.strokeStyle = 'red';

ctx.lineWidth = 5;
ctx.stroke();


//draw a rectangle

ctx.strokeStyle = 'blue';
// ctx.fillStyle = 'blue';
ctx.strokeRect(50,50,100,150);
ctx.fillStyle = 'red';
ctx.fillRect(51,51,99,149)
ctx.strokeRect(200,200,150,100)

ctx.strokeRect(400,50,150,150)
// ctx.fillStyle = 'red';

// ctx.fillRect(50,50,100,150);// x,y,width,height

// Draw a circle


ctx.beginPath();

ctx.arc(300,300,100,0,Math.PI*2);

ctx.strokeStyle = 'green';

ctx.stroke();


ctx.beginPath();

ctx.arc(300,300,100,0,Math.PI*2);

ctx.strokeStyle = 'green';

ctx.stroke();