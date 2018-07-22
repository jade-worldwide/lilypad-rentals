const router = require("express").Router();
const usersController = require("../../controllers/usersController");
let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;

// Matches with "/api/properties"
router.route("/")
  .post(usersController.create);


module.exports = router;
