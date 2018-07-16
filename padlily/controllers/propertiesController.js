const db = require("../models");

// Defining methods for the propertiessController
module.exports = {
  findAll: function(req, res) {
    db.Property
      .find(req.query)
      .sort({ date: -1 })
      .then(dbProperty => res.json(dbProperty))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Property
      .findById(req.params.id)
      .then(dbProperty => res.json(dbProperty))
      .catch(err => res.status(422).json(err));
  }
};
