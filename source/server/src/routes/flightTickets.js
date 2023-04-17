const express = require("express");
const flightTicketRouter = express.Router();
const FlightTicketController = require("../app/controllers/FlightTicketController");

flightTicketRouter.post("/", FlightTicketController.findByFlightID);

module.exports = flightTicketRouter;
