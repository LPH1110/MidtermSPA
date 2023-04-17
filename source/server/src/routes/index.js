const flightRouter = require("./flights");
const airportRouter = require("./airports");
const userRouter = require("./users");
const areaRouter = require("./areas");
const flightTicketRouter = require("./flightTickets");

function routes(app) {
  app.use("/flights", flightRouter);
  app.use("/users", userRouter);
  app.use("/airports", airportRouter);
  app.use("/areas", areaRouter);
  app.use("/flight-tickets", flightTicketRouter);
}

module.exports = routes;
