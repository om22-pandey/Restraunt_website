const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// import { restraunts } from './config';
// console.log(restraunts)
const { restraunts } = require('./config');
app.use(cors());

const restraunts_list = restraunts;

// const restraunts = [
//   {
//     id: 1,
//     name: "Spicy Delight",
//     cuisine: "Indian",
//     rating: 4.5,
//     image: "https://wallpaperaccess.com/full/1184222.jpg",
//     contact_number: "+91 9876543210",
//     location: "Delhi, India",
//     website: "https://spicydelight.com",
//     email: "contact@spicydelight.com",
//     menu: [
//       { name: "Paneer Butter Masala", price: 350, category: "Main Course", veg: true },
//       { name: "Garlic Naan", price: 50, category: "Bread", veg: true },
//       { name: "Chicken Biryani", price: 450, category: "Rice", veg: false },
//       { name: "Gulab Jamun", price: 80, category: "Dessert", veg: true }
//     ],
//     opening_hours: {
//       monday: "10:00 AM - 11:00 PM",
//       tuesday: "10:00 AM - 11:00 PM",
//       wednesday: "10:00 AM - 11:00 PM",
//       thursday: "10:00 AM - 11:00 PM",
//       friday: "10:00 AM - 11:30 PM",
//       saturday: "9:00 AM - 12:00 AM",
//       sunday: "9:00 AM - 11:00 PM"
//     }
//   },
//   {
//     id: 2,
//     name: "Sakura Sushi Bar",
//     cuisine: "Japanese",
//     rating: 4.7,
//     image: "https://wallpaperaccess.com/full/767152.jpg",
//     contact_number: "+1 123-456-7890",
//     location: "Tokyo, Japan",
//     website: "https://sakurasushi.jp",
//     email: "info@sakurasushi.jp",
//     menu: [
//       { name: "California Roll", price: 12, category: "Sushi", veg: false },
//       { name: "Miso Soup", price: 5, category: "Soup", veg: true },
//       { name: "Tempura", price: 15, category: "Appetizer", veg: false }
//     ],
//     opening_hours: {
//       monday: "11:00 AM - 10:00 PM",
//       tuesday: "11:00 AM - 10:00 PM",
//       wednesday: "11:00 AM - 10:00 PM",
//       thursday: "11:00 AM - 10:00 PM",
//       friday: "11:00 AM - 11:00 PM",
//       saturday: "12:00 PM - 11:00 PM",
//       sunday: "12:00 PM - 9:00 PM"
//     }
//   },
//   // Add other restaurant objects here from your constants
// ];

// API route
app.get('/api/restraunts_list', (req, res) => {
  res.json(restraunts_list);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
