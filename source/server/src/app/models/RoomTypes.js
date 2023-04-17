const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RoomTypes = new Schema({
  TypeID: { type: String },
  TypeName: { type: String },
  Accommodate: { type: String },
});

module.exports = mongoose.model("room_types", RoomTypes);
