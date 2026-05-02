const mongoose=require('mongoose');
const Movie= require('./models/movies');




const dummyMovie=[
  {
    name: "Inception",
    year: 2010,
    img: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    desc: "A thief who steals corporate secrets through dream-sharing technology is given an inverse task of planting an idea."
  },
  {
    name: "The Dark Knight",
    year: 2008,
    img: "https://m.media-amazon.com/images/I/51EbJjl+zVL._AC_.jpg",
    desc: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos."
  },
  {
    name: "Interstellar",
    year: 2014,
    img: "https://m.media-amazon.com/images/I/71y3G8k9+VL._AC_SL1024_.jpg",
    desc: "A team of explorers travel through a wormhole in space to ensure humanity's survival."
  },
  {
    name: "Titanic",
    year: 1997,
    img: "https://m.media-amazon.com/images/I/71y6zX9lY+L._AC_SL1024_.jpg",
    desc: "A romance unfolds aboard the ill-fated RMS Titanic."
  },
  {
    name: "Avatar",
    year: 2009,
    img: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
    desc: "A paraplegic Marine is sent to Pandora and becomes torn between two worlds."
  },
  {
    name: "The Matrix",
    year: 1999,
    img: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    desc: "A hacker discovers the true nature of reality and his role in the war against its controllers."
  },
  {
    name: "Gladiator",
    year: 2000,
    img: "https://m.media-amazon.com/images/I/51A9O9k1ZQL._AC_.jpg",
    desc: "A former Roman General sets out to exact vengeance against the corrupt emperor."
  },
  {
    name: "Jurassic Park",
    year: 1993,
    img: "https://m.media-amazon.com/images/I/81nC6xR0ZEL._AC_SL1500_.jpg",
    desc: "During a preview tour, a theme park suffers a major power breakdown that allows dinosaurs to run loose."
  },
  {
    name: "Avengers: Endgame",
    year: 2019,
    img: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg",
    desc: "The Avengers assemble once more to reverse Thanos' actions and restore balance."
  },
  {
    name: "Forrest Gump",
    year: 1994,
    img: "https://m.media-amazon.com/images/I/61+7LwZ6fYL._AC_SL1000_.jpg",
    desc: "The life journey of a simple man with a big heart who influences several historical events."
  }
]


function seed(){
    Movie.insertMany(dummyMovie)
.then(()=>{
    console.log("data seeded");
})
}

module.exports=seed;



