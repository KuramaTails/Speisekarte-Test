const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reqString = {
  type: String,
  required: true,
};

const dishSchema = new Schema({
  name: reqString,
  description: reqString,
  image: reqString,
  price: reqString,
});

module.exports = mongoose.model("Dish", dishSchema);
