import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const saveSchema = new Schema({
  item: { type: String, required: true },
  income: { type: String, required: true },
  bills: { type: String, required: true },
  leftoverIncome:"",
  cost: { type: String, required: true },
  save: { type: String, required: true },
  time: "",
  date: { type: Date, default: Date.now }
});

const Save = model("Save", saveSchema);

export default Save;
