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
    address: "222 Stephen King Ave.",
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
  },
  {
    title: "Townhouse by the beach",
    address: "222 J.K Rowling St.",
    phoneNumber: 5555555555,
    propertySize: "2,500 Sq Foot",
    numOfBeds: 2,
    numOfBaths: 2,
    price: 7000,
    pets: true,
    parking: true,
    laundry: true,
    description: "A magical house by the beach garanteed to turn heads",
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

  // const applicationSeed = [
  //   {
  //     name: "John Wick",
  //     currentAddress: "222 Stephen King Ave.",
  //     email: "Babayega@gmail.com",
  //     phoneNumber: 4081234567,
  //     references: "The mafia",
  //     income: 120000,
  //     creditScore: 800,
  //     pets: true,
  //     date: new Date(Date.now())
  //   },
  //   {
  //     name: "Paul Kim",
  //     currentAddress: "123 Fullerton Dr.",
  //     email: "PKim@gmail.com",
  //     phoneNumber: 6501234567,
  //     references: "The yakuza",
  //     income: 500000,
  //     creditScore: 720,
  //     pets: false,
  //     date: new Date(Date.now())
  //   },
  // ];
  
  // db.Application
  //   .remove({})
  //   .then(() => db.Application.collection.insertMany(applicationSeed))
  //   .then(data => {
  //     console.log(data.result.n + " records inserted!");
  //     process.exit(0);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     process.exit(1);
  //   });