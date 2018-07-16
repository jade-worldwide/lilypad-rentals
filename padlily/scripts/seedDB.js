const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/lilypadDB"
);

const propertySeed = [
  {
    title: "The Dead Zone",
    address: "Stephen King",
    phoneNumber: 5555555555,
    propertySize: "3,000 Sq Foot",
    numOfBeds: 3,
    numOfBaths: 2,
    price: 5000,
    pets: false,
    parking: true,
    laundry: true,
    description: "Beautiful Home for lots of Sexual Adventures",
    date: new Date(Date.now())
  }
];

db.Property
  .remove({})
  .then(() => db.Property.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
