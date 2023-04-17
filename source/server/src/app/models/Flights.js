const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Flights = new Schema({
  FlightID: { type: String },
  FlyDate: { type: String },
  DepartureTime: { type: Date },
  LandingTime: { type: Date },
  NumberEmptySeat: {
    Economy: { type: Number },
    PremiumEconomy: { type: Number },
    Business: { type: Number },
    FirstClass: { type: Number },
  },
  AirlineID: { type: String },
});

module.exports = mongoose.model("flights", Flights);
