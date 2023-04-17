const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Places = new Schema({
  PlaceID: { type: String },
  PlaceName: { type: String },
  Address: { type: String },
  Discription: { type: String },
});

module.exports = mongoose.model("places", Places);
