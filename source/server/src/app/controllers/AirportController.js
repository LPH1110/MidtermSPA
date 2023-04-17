const Airlines = require("../models/Airlines.js");
const Airports = require("../models/Airports.js");

class AirportController {
  async index(req, res, next) {
    try {
      const airports = await Airports.find({});
      res.json(airports);
    } catch (e) {
      next(e);
    }
  }

  async findByAirlineID(req, res, next) {
    try {
      const { AirlineID } = req.body;
      const airline = await Airlines.findOne({ AirlineID });
      const departureAirport = await Airports.findOne({
        AirportID: airline.FromAirport,
      });
      const landingAirport = await Airports.findOne({
        AirportID: airline.ToAirport,
      });
      res.json({ departureAirport, landingAirport });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AirportController();
