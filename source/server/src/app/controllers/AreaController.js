const Areas = require("../models/Areas.js");

class AreaController {
  async index(req, res, next) {
    try {
      const areas = await Areas.find({});
      res.json(areas);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AreaController();
