const mongoose=require('mongoose');
const Product=require('./models/product');


const dummyProducts = [
  {
    name: "Wireless Bluetooth Headphones",
    price: 2499,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    desc: "High-quality wireless headphones with noise cancellation."
  },
  {
    name: "Gaming Mouse",
    price: 1299,
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    desc: "Ergonomic RGB gaming mouse with adjustable DPI."
  },
  {
    name: "Mechanical Keyboard",
    price: 3499,
    img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    desc: "Mechanical keyboard with blue switches and RGB lighting."
  },
  {
    name: "Smart Watch",
    price: 4999,
    img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
    desc: "Track fitness, calls, and notifications on the go."
  },
  {
    name: "Laptop Backpack",
    price: 1599,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    desc: "Water-resistant backpack with laptop compartment."
  },
  {
    name: "Portable Speaker",
    price: 2199,
    img: "https://images.unsplash.com/photo-1507878866276-a947ef722fee",
    desc: "Compact Bluetooth speaker with deep bass."
  },
  {
    name: "DSLR Camera",
    price: 45999,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    desc: "Professional DSLR camera for photography enthusiasts."
  },
  {
    name: "Running Shoes",
    price: 2999,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    desc: "Comfortable running shoes with lightweight design."
  },
  {
    name: "Office Chair",
    price: 7999,
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    desc: "Ergonomic office chair with lumbar support."
  },
  {
    name: "Coffee Maker",
    price: 3499,
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    desc: "Automatic coffee maker with programmable timer."
  },
  {
    name: "LED Monitor",
    price: 10999,
    img: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
    desc: "24-inch Full HD LED monitor with ultra-thin bezels."
  },
  {
    name: "Fitness Band",
    price: 1999,
    img: "https://images.unsplash.com/photo-1510017803434-a899398421b3",
    desc: "Track steps, heart rate, and sleep quality."
  },
  {
    name: "Electric Kettle",
    price: 999,
    img: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
    desc: "Fast boiling electric kettle with auto shut-off."
  },
  {
    name: "Tablet Stand",
    price: 699,
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
    desc: "Adjustable aluminum stand for tablets and iPads."
  },
  {
    name: "USB-C Hub",
    price: 1499,
    img: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
    desc: "Multi-port USB-C hub with HDMI and USB 3.0 support."
  }
];


async function seed(){
    await Product.insertMany(dummyProducts);
    console.log('data has been seeded')
}

module.exports=seed;