const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customers = new Schema({
  CustomerName: { type: String },
  SSN: { type: String },
  Email: { type: String },
  DOB: { type: String },
  Address: { type: String },
});

module.exports = mongoose.model("customers", Customers);
