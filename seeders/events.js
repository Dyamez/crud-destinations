import pic01 from "../images/pic1.jpg";
//import pic02 from "../images/pic2.jpg";
import pic03 from "../images/pic3.jpg";
//import pic04 from "../images/pic4.jpg";
import pic05 from "../images/pic5.jpg";
import pic06 from "../images/pic6.jpg";
import pic07 from "../images/pic7.jpg";
import pic09 from "../images/pic9.jpg";
import pic10 from "../images/pic10.jpg";
import pic11 from "../images/pic11.jpg";
import pic12 from "../images/pic12.jpg";
import pic13 from "../images/pic13.jpg";
import pic15 from "../images/pic15.jpg";
import pic16 from "../images/pic16.jpg";

const db = require("../models");

db.Destination.create([
  {
    id: "01",
    title: "Luneta Park",
    city: "Manila",
    distance: 800,
    price: 888,
    maxGroupSize: 2,
    desc: "Historical landmark in Manila",
    reviews: [
      {
        name: "Edward",
        rating: 5.0,
      },
      {
        name: "James",
        rating: 5.0,
      },
      {
        name: "Justine",
        rating: 5.0,
      },
    ],
    avgRating: 4.9,
    photo: pic09,
    featured: true,
  },
  {
    id: "02",
    title: "The Strip",
    city: "Las Vegas",
    distance: 100,
    price: 500,
    maxGroupSize: 10,
    desc: "What happens in Vegas...",
    reviews: [
      {
        name: "Samantha",
        rating: 3.6,
      },
    ],
    avgRating: 4.5,
    photo: pic10,
    featured: true,
  },
  {
    id: "03",
    title: "Endgame Vacation",
    city: "Pyongyang, North Korea",
    distance: 700,
    price: 100,
    maxGroupSize: 1,
    desc: "Supreme Goodtime with Relaxed Atmosphere.",
    reviews: [
      {
        name: "Kim",
        rating: 3.6,
      },
    ],
    avgRating: 4.8,
    photo: pic13,
    featured: true,
  },
  {
    id: "04",
    title: "Los Angeles",
    city: "Los Angeles, California",
    distance: 500,
    price: 700,
    maxGroupSize: 8,
    desc: "City of Angels",
    reviews: [
      {
        name: "George",
        rating: 3.6,
      },
      {
        name: "Marvin",
        rating: 3.5,
      },
      {
        name: "Dexter",
        rating: 4.0,
      },
    ],
    avgRating: 4.9,
    photo: pic12,
    featured: true,
  },
  {
    id: "05",
    title: "Indonesia",
    city: "Indonesia",
    distance: 500,
    price: 940,
    maxGroupSize: 8,
    desc: "Relaxing",
    reviews: [
      {
        name: "Natalie",
        rating: 3.6,
      },
    ],
    avgRating: 4.5,
    photo: pic05,
    featured: false,
  },
  {
    id: "06",
    title: "Kyoto",
    city: "Japan",
    distance: 500,
    price: 634,
    maxGroupSize: 8,
    desc: "Breathtaking",
    reviews: [
      {
        name: "Pat",
        rating: 4.5,
      },
    ],
    avgRating: 4.4,
    photo: pic06,
    featured: false,
  },
  {
    id: "07",
    title: "Paris",
    city: "France",
    distance: 500,
    price: 674,
    maxGroupSize: 8,
    desc: "Very French",
    reviews: [],
    avgRating: 4.2,
    photo: pic07,
    featured: false,
  },
  {
    id: "08",
    title: "Thailand",
    city: "Thailand",
    distance: 500,
    price: 578,
    maxGroupSize: 8,
    desc: "Fun",
    reviews: [
      {
        name: "Gerard",
        rating: 4.1,
      },
    ],
    avgRating: 4.6,
    photo: pic03,
    featured: false,
  },
  {
    id: "09",
    title: "Big Ben",
    city: "London",
    distance: 300,
    price: 998,
    maxGroupSize: 10,
    desc: "Big Ben and the Big British Clock",
    reviews: [
      {
        name: "James",
        rating: 4.9,
      },
    ],
    avgRating: 4.5,
    photo: pic01,
    featured: false,
  },
  {
    id: "10",
    title: "Portland",
    city: "Portland, Oregon",
    distance: 500,
    price: 800,
    maxGroupSize: 8,
    desc: "Rose Gardens and Bushes Pepper Parks are Legendary.",
    reviews: [
      {
        name: "Ezikiel",
        rating: 3.6,
      },
    ],
    avgRating: 4.8,
    photo: pic11,
    featured: false,
  },
  {
    id: "11",
    title: "Melbourne",
    city: "Melbourne",
    distance: 900,
    price: 600,
    maxGroupSize: 3,
    desc: "Crikey! Wildlife is Ozzy-riffic!",
    reviews: [
      {
        name: "Steve",
        rating: 4.6,
      },
    ],
    avgRating: 4.8,
    photo: pic15,
    featured: false,
  },
  {
    id: "12",
    title: "India",
    city: "Delhi",
    distance: 200,
    price: 200,
    maxGroupSize: 4,
    desc: "Slumdog Bollywood",
    reviews: [
      {
        name: "Ganesh",
        rating: 4.7,
      },
    ],
    avgRating: 4.3,
    photo: pic16,
    featured: false,
  },
]);
