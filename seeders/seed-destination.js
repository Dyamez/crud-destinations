const db = require("../models");

db.Destination.create([
  {
    name: "Luneta Park",
    city: "Manila",
    state: "Philippines",

    pic: "/images/luneta.jpg",
    founded: 1999,
  },
  {
    name: "The Strip",
    city: "Las Vegas",
    state: "Nevada",
    pic: "/images/strip.jpg",
    founded: 1996,
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
