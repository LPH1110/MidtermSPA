const FlightTickets = require("../models/FlightTickets");
const Airlines = require("../models/Airlines");
const Flights = require("../models/Flights");
const Airports = require("../models/Airports");

class FlightController {
  async index(req, res, next) {
    try {
      const { source, destination, departureDate } = req.body;
      const sourceStrings = source.split(" ");
      const sourceId = sourceStrings[sourceStrings.length - 1].replace(
        /[()]/g,
        ""
      );
      const desStrings = destination.split(" ");
      const destinationId = desStrings[desStrings.length - 1].replace(
        /[()]/g,
        ""
      );

      const airline = await Airlines.findOne({
        FromAirport: sourceId,
        ToAirport: destinationId,
      });

      const flights = await Flights.find({
        AirlineID: airline.AirlineID,
        FlyDate: departureDate,
      });

      res.json(flights);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FlightController();
