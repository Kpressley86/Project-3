const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
  name: { type: String, required: true },
  income: { type: String, required: true },
  bills: { type: String, required: true },
  cost: { type: String, required: true },
});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;