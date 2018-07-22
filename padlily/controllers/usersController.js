const db = require("../models/User");

// Defining methods for the booksController
module.exports = {
  create: function(req, response) {
    db
      .create(req.body)
      .then(response => db.createUser(response))
      .catch(err => res.status(422).json(err));
  },
  };