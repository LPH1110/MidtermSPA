const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Airlines = new Schema({
  AirlineID: { type: String },
  ToAirport: { type: String },
  FromAirport: { type: String },
});

module.exports = mongoose.model("airlines", Airlines);
