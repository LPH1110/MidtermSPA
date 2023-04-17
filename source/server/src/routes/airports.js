const express = require("express");
const airportRouter = express.Router();
const AirportController = require("../app/controllers/AirportController");

airportRouter.use("/", AirportController.findByAirlineID);

module.exports = airportRouter;
