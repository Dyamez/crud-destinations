const db = require("../models");

// To use await, we need an async function.
async function seed() {
  // Get the destination
  let destination = await db.Destination.findOne({ name: "Jolibee" });

  // Create a fake sample comment.
  let comment = await db.Comment.create({
    author: "Famished Fran",
    rant: false,
    stars: 5.0,
    content: "Wow, simply amazing! Highly recommended!",
  });

  // Add that comment to the destination's comment array.
  destination.comments.push(comment.id);

  //save the destination now that it has comment
  await destination.save();

  // Exit the program
  process.exit();
}

seed();
