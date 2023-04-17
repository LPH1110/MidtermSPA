const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Rooms = new Schema({
  RoomID: { type: String },
  Price: { type: Number },
  Availabel: { type: Boolean },
});

module.exports = mongoose.model("rooms", Rooms);
