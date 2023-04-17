const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Journeys = new Schema({
  JourneyID: { type: String },
  JourneyName: { type: String },
  Date: {
    start: { type: Date },
    end: { type: Date },
  },
});

module.exports = mongoose.model("journeys", Journeys);
