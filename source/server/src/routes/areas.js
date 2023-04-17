const express = require("express");
const areaRouter = express.Router();
const AreaController = require("../app/controllers/AreaController");

areaRouter.use("/", AreaController.index);

module.exports = areaRouter;
