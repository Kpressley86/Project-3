const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
  item: { type: String, required: true },
  income: { type: String, required: true },
  bills: { type: String, required: true },
  cost: { type: String, required: true },
  save: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;
