const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/properties"
router.route("/")
  .post(usersController.create)
  .post(usersController.login)

// router.route("/:id")
//   .post(usersController.login);
module.exports = router;
