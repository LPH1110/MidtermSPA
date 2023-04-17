const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RentInvoices = new Schema({
  RentInvoiceID: { type: String },
  CheckIn: {
    CheckInDate: { type: String },
    CheckInTime: { type: Date },
  },
  CheckOut: {
    CheckInDate: { type: String },
    CheckInTime: { type: Date },
  },
});

module.exports = mongoose.model("rent_invoices", RentInvoices);
