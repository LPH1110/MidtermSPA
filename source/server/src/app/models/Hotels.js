const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Hotels = new Schema({
  HotelID: { type: String },
  HotelName: { type: String },
  Address: { type: String },
  AreaID: { type: String },
  Description: { type: String },
  AccompaniedService: {
    wifi: { type: Boolean },
    pool: { type: Boolean },
    parking: { type: Boolean },
    restaurant: { type: Boolean },
    evelator: { type: Boolean },
    pickUp: { type: Boolean },
  },
});

module.exports = mongoose.model("hotels", Hotels);
