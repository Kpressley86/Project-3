const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Saves collection and inserts the Saves below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const SaveSeed = [
  {
    name: "0",
    income: "1",
    bills: "2",
    cost: "3"
  }
];

db.Save
  .remove({})
  .then(() => db.Save.collection.insertMany(SaveSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });