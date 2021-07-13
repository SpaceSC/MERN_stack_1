const mongoose = require("mongoose");

// schema
const dogSchema = new mongoose.Schema({
  input1: { type: String }, // required: true, unique: true, default: false throws error if false
  input2: { type: String, required: true}, // required: true, unique: true, default: false throws error if false
});

// make model from the schema
// 1. parameter: model's name, mongoose tries to put it in plural, 2.:the const from above 3.: OPTIONAL, the name I want for the collection (not the automatic plural of the 1.)
module.exports = mongoose.model("Dog", dogSchema);