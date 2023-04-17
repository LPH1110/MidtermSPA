const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Dependents = new Schema({
  DepedentName: { type: String },
  DOB: { type: String },
  SSN: { type: String },
  TicketInvoiceID: { type: String },
});

module.exports = mongoose.model("dependents", Dependents);
