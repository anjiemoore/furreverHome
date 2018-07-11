const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/animaldatabase"
);

const animalSeed = [
  {
    name: "Dude",
    image: "http://petharbor.com/get_image.asp?RES=Detail&ID=A0737144&LOCATION=DDFL",
    about:
      "EXPRESSIVE BOY! Favorite Things: Cheek rubs and quiet places! Special Features: Has done well with the litterbox. Has really come out of his shell here! Dream Home: Will do best without dogs and in a quiet, patient home where he can settle in to his best self!",
    date: new Date(Date.now())
  },
 
];

db.Animal
  .remove({})
  .then(() => db.Animal.collection.insertMany(animalSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
