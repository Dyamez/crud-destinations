const db = require("../models");

db.Destination.create([
  {
    name: "Luneta Park",
    city: "Manila",
    state: "Philippines",

    pic: "/images/luneta.jpg",
    founded: 1820,
  },
  {
    name: "The Strip",
    city: "Las Vegas",
    state: "Nevada",
    pic: "/images/strip.jpg",
    founded: 1905,
  },
  {
    name: "Kyoto",
    city: "Kyoto",
    state: "Japan",
    pic: "/images/pic6.jpg",
    founded: 1889,
  },
  {
    name: "Eiffel Tower",
    city: "Paris",
    state: "France",
    pic: "/images/pic7.jpg",
    founded: 1889,
  },
  {
    name: "Melbourne",
    city: "Melbourne",
    state: "Australia",
    pic: "/images/pic15.jpg",
    founded: 1835,
  },
  {
    name: "India",
    city: "New Delhi",
    state: "India",
    pic: "/images/pic16.jpg",
    founded: 1911,
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure", err);
    process.exit();
  });
