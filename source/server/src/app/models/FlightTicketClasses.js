const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightTicketClasses = new Schema({
  TicketClassID: { type: String },
  TicketClassName: { type: String },
});

module.exports = mongoose.model("flight_ticket_classes", FlightTicketClasses);
