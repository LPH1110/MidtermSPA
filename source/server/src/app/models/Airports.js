const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Airports = new Schema({
  AirportID: { type: String },
  AirportName: { type: String },
});

module.exports = mongoose.model("airports", Airports);
