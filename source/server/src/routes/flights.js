const express = require("express");
const flightRouter = express.Router();
const FlightController = require("../app/controllers/FlightController");

flightRouter.use("/", FlightController.index);

module.exports = flightRouter;
