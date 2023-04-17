const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Airplanes = new Schema({
  AirplaneID: { type: String },
  AirplaneName: { type: String },
  AirportID: { type: String },
  BrandName: { type: String },
});

module.exports = mongoose.model("airplanes", Airplanes);
