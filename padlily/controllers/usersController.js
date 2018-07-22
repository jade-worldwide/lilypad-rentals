const db = require("../models/User");
let express = require('express');
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

// Defining methods for the booksController
module.exports = {

  create: function(req, response) {
    db
      .create(req.body)
      .then(response => db.createUser(response))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, response) {
    db
    .loginUser(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  }

  };