const btn=document.querySelector('button')

const text=document.querySelector('textarea');
const main=document.querySelector('.questions')

btn.addEventListener('click', (e)=>{
      let textValue=text.value;
      console.log(textValue)

      if(textValue.trim()===''){
        return;
      }
      appendMessage(textValue)
      axios.post('/ask',{
        q:textValue
        })
        .then((resposne)=>{
            const data=(resposne.data);
                appendResponse(data);
        })
        .catch((err)=>{
            console.log(err)
        })

        console.log("button click ho gaya bhaiya")
})

function appendResponse(data){
    const responseBox=document.querySelector('.response-box p');
    responseBox.innerText=data;
}

function appendMessage(data){
    let q=document.createElement('div');
    q.classList.add('q');
    q.innerText=data;
    console.log(q,main)
    main.appendChild(q);

}
