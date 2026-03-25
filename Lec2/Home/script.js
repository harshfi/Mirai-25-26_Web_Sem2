
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//wall of home

ctx.strokeRect(200,200,400,200);

//door

ctx.fillRect(350,300,50,100)

//roof

ctx.beginPath();

ctx.moveTo(200,200);
ctx.lineTo(400,50);
ctx.lineTo(600,200);
ctx.closePath();
ctx.strokeStyle = 'brown';
ctx.stroke();