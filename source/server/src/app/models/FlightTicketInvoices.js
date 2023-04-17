const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FlightTicketInvoices = new Schema({
  TicketInvoiceID: { type: String },
  TotalPrice: { type: Number },
});

module.exports = mongoose.model("flight_ticket_invoices", FlightTicketInvoices);
