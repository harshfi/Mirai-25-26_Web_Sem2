
let input=document.querySelector("input");
let btn=document.querySelector("button");

let apiKey="cd6a4a0739a2b1802de49804971c6848";

let city;

input.addEventListener("change",(e)=>{
    city=e.target.value;
    console.log(city);
})

btn.addEventListener("click",async()=>{
    let res=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`);
    let data=await res.json();
    let lat=(data.results[0].latitude);
    let lon=(data.results[0].longitude);
    console.log(lat, lon);

    let weatherData=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
    let weather=await weatherData.json();
    
    document.querySelector('#temp').innerText='Temperature: '+Math.round(weather.main.feels_like-273)+'°C';
    document.querySelector('#humidity').innerText='Humidity: '+weather.main.humidity+'%';
    document.querySelector('#description').innerText='Description: '+weather.weather[0].description;

})