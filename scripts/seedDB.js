const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const saveSeed = [
  {
    item: "The Dead Zone",
    income: "2000",
    bills: "1700",
    leftoverIncome: "300",
    cost: "1000",
    time: "",
    date: new Date(Date.now())
  },
  {
    item: "socks",
    income: "10000",
    bills: "7000",
    leftoverIncome: "3000",
    cost: "50000",
    time: "",
    date: new Date(Date.now())
  }
];

db.Save
  .remove({})
  .then(() => db.Save.collection.insertMany(saveSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
