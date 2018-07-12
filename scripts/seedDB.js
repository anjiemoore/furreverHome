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
  {
    name: "Spencer",
    image: "http://petharbor.com/get_image.asp?RES=Detail&ID=A0423108&LOCATION=DDFL",
    about:"NOTHING LIKE A RAGDOLL! Favorite Things: Affection, treats, and cat naps. Special Features: Lived well with a dog; affectionate and laidback personality! Dream Home: A loving family with lots of time to spend with him.",
    date: new Date(Date.now())
  },
  {
    name: "Nikey",
    image: "http://petharbor.com/get_image.asp?RES=Detail&ID=A0784672&LOCATION=DDFL",
    about: "SUCH A BEAUTIFUL SOUL! Favorite Things: Walks, treats, toys, soft beds, naps in the sunshine and being loved! Special Features: Sweet-natured, so smart, loving and full of life! Was friendly with adults, kids, and strangers. Dream Home: Active, loving, play, walks, she's part of your everyday life! All-breed area. No shared walls. Would do best as your only canine companion!",
    date: new Date(Date.now())
  },
  {
    name: "Doby",
    image: "http://petharbor.com/get_image.asp?RES=Detail&ID=A0750483&LOCATION=DDFL",
    about: "FUN LOVING DOG! Favorite Things: Dog parks and hikes. Special Features: He is described as friendly and very sweet by volunteers. He loves to play, is a great walker and likes being outside. He is an amazing guy. Dream Home: A home with lots of outdoor time for fun play with his humans, and a warm bed to cuddle up with the family.",
    date: new Date(Date.now())
  },
  {
    name: "Asuka",
    image: "http://petharbor.com/get_image.asp?RES=Detail&ID=A0674190&LOCATION=DDFL",
    about: "MOST BOOP-ABLE NOSE! Favorite things: Scratching post, the great indoors. Special features: Was a little shy around strangers but warmed up within hours - pretty darn fast in cat time. Dream Home: While she's never lived with other animals or kids, Asuka is said to have been an affectionate lap cat.",
    date: new Date(Date.now())
  }
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
