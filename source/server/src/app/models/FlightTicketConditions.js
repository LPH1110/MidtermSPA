const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightTicketConditions = new Schema({
  ConditionID: { type: String },
  HandBaggage: { type: Number },
  CheckedBaggage: { type: Number },
  ChangeTickeInformation: { type: Boolean },
  ChangeName: { type: Boolean },
  TicketRefund: { type: Boolean },
});

module.exports = mongoose.model(
  "flight_ticket_conditions",
  FlightTicketConditions
);
