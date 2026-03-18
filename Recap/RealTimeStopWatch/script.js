

let btn=document.getElementById("btn");

let hr=document.querySelector(".hr");
let min=document.querySelector(".min");
let sec=document.querySelector(".sec");

let hour=0;
let minute=0;
let second=0;

let interval;

btn.addEventListener("click",()=>{
   
    if(interval===undefined){
         interval= setInterval(()=>{
        btn.innerHTML="Stop";
        second++;
        sec.innerText=second;
        if(second==60){
            second=0;
            minute++;
            min.innerText=minute;
        }
        if(minute==60){
            minute=0;
            hour++;
            hr.innerText=hour;
        }

    },1000);
    }
   

    if(btn.innerHTML=="Stop"){
        clearInterval(interval);
        btn.innerHTML="Start";
        interval=undefined;
    }
})
