const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Areas = new Schema({
  AreaID: { type: String },
  AreaName: { type: String },
});

module.exports = mongoose.model("areas", Areas);
