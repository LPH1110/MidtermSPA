const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightTickets = new Schema({
  TicketID: { type: String },
  TicketStatus: { type: String },
  TicketPriceID: { type: String },
  TicketClassID: { type: String },
  AirlineID: { type: String },
  FlightID: { type: String },
  Thumbnail: { type: String },
  BrandName: { type: String },
});

module.exports = mongoose.model("flight_tickets", FlightTickets);
