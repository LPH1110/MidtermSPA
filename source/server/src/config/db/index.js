const mongoose = require("mongoose");

async function connect(userName = "", databaseName = "") {
  const mongoAtlasUri = `mongodb+srv://LPH1110:BmBT1BrgSRK0ZILp@cluster0.pxo93bk.mongodb.net/BetterTripDB`;
  try {
    await mongoose.connect(mongoAtlasUri);
    console.log("-> Connected to DB successfully!");
  } catch (e) {
    console.log("-> Failed to connect DB...");
  }
}

module.exports = { connect };
