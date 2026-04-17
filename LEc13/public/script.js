let ul= document.querySelector('ul');
let addTask= document.querySelector('.addTask')
let input =document.querySelector('input')
let btns =document.querySelector('.btns');
let li=document.querySelectorAll('li');

array.forEach(element => {
    
});

// console.log(btns)

addTask.addEventListener('click',async(e)=>{
     let task=(input.value)
    const data= await axios.post('/addTask',{task})
    console.log(data.data);
    display()
})

btns.addEventListener('click',(e)=>{
      let newActive=(e.target);
      let oldActive=document.querySelector('.active');
      oldActive.classList.remove('active')//old wala remove
      newActive.classList.add('active');//new wala added

      display()

})









function display(){
    let active=document.querySelector('.active')
    
    let type=active.innerText;
     
    if(type==="ALL"){

        axios.get('/allTask')
        .then((data)=>{
            console.log(data.data)
            attach(data.data);
        })
    }
   else if(type==='Pending'){
        axios.get('/pendingTask')
        .then(({data})=>{
            attach(data)
        })
    }
    else if(type==='Completed'){
        axios.get('/completedTask')
        .then(({data})=>{
           attach(data)
        })
    }

}

function attach(data){
    ul.innerHTML=''
   for(let i=0;i<data.length;i++){
    let li= document.createElement('li');

    // <span>gym</span>
    //         <button>delete</button>
    //          <button>complete</button>
    
    // li.innerHTML=`<span style="color: ${data[i].status?"green":"red"}">${data[i].task}</span>
    //  <div style="float:right">
    // <button>delete</button> <button>${data[i].status?"undo":"complete"}</button>  </div>`;
    
    li.innerHTML=`<span ">${data[i].task}</span>
    <div style="float:right" >

            <button>delete</button>
             <button>${data[i].status?"undo":"complete"}</button>
             </div>`

     li.style.backgroundColor= data[i].status? "greenyellow":""

    ul.appendChild(li);
   }
}


display()





