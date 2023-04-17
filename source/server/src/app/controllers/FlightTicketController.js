const FlightTickets = require("../models/FlightTickets.js");
const FlightTicketPrices = require("../models/FlightTicketPrices.js");
const FlightTicketClasses = require("../models/FlightTicketClasses.js");

class FlightTicketController {
  async index(req, res, next) {
    try {
      const flightTickets = await FlightTickets.find({});
      res.json(flightTickets);
    } catch (e) {
      next(e);
    }
  }

  async findByFlightID(req, res, next) {
    try {
      let flightTicket = await FlightTickets.findOne({
        FlightID: req.body.FlightID,
      });

      const { _doc } = flightTicket;

      const flightTicketPrice = await FlightTicketPrices.findOne({
        TicketPriceID: flightTicket.TicketPriceID,
      });

      const { USD, VND } = flightTicketPrice;
      const flightTicketClass = await FlightTicketClasses.findOne({
        TicketClassID: flightTicket.TicketClassID,
      });

      const { TicketClassName } = flightTicketClass;

      res.json({ ..._doc, USD, VND, TicketClassName });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new FlightTicketController();
