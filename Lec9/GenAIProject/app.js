
const express = require('express');

const app = express();
// import { GoogleGenAI } from "@google/genai";
const { GoogleGenAI } = require("@google/genai")
const ai = new GoogleGenAI({apiKey: "your api key"});


app.use(express.json()) // ye line isliye lagayi hain taki hum postman se json data bhej sakein aur usko read kar sakein
app.use(express.urlencoded({extended:true})) // ye line isliye lagayi hain taki hum postman se form data bhej sakein aur usko read kar sakein


app.post('/ask',async (req,res)=>{
    const {q} = req.body;

    const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: q,
  });
  console.log(response.text);
    res.send(response.text)
})
app.listen(4000,()=>{
    console.log("server chal chuka hain bhaiya")
})