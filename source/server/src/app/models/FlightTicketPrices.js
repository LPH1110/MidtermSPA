const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightTicketPrices = new Schema({
  TicketPriceID: { type: String },
  USD: { type: Number },
  VND: { type: Number },
});

module.exports = mongoose.model("flight_ticket_prices", FlightTicketPrices);
