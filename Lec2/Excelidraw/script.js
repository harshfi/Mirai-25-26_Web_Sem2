let canvas=document.getElementById('canvas')
let ctx=canvas.getContext('2d');
let color=document.querySelectorAll('.color');
let clear=document.querySelector('#clear')

let imageData=[];


canvas.width=600;
canvas.height=400;

// console.log(ctx);

let isDrawing=false;
let currentcolor='black';

//pc
canvas.addEventListener('mousedown',start);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',stop);

//mobile
canvas.addEventListener('touchstart',start);
canvas.addEventListener('touchmove',draw);
canvas.addEventListener('touchend',stop);


function start(e){
    isDrawing=true;
    const rect = canvas.getBoundingClientRect();
    console.log(rect,rect.left,rect.top);
    ctx.beginPath();
    console.log(e.clientX,e.clientY)
    ctx.moveTo(e.clientX-rect.left,e.clientY-rect.top);
}


function draw(e){
    if(!isDrawing)return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX-rect.left,e.clientY-rect.top);
    ctx.lineCap='round'
    ctx.lineJoin='round';
    ctx.strokeStyle=currentcolor;
    ctx.stroke();
}

function stop(e){
    isDrawing=false;
    imageData.push(ctx.im)
}

for(let i=0;i<color.length;i++){
    color[i].addEventListener('click',(e)=>{
        currentcolor=(color[i].id);
    })
}


clear.addEventListener('click',()=>{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})