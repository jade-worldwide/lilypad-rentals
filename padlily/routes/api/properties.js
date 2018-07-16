const router = require("express").Router();
const propertiesController = require("../../controllers/propertiesController");

// Matches with "/api/books"
router.route("/results")
  .get(propertiesController.findAll)

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(propertiesController.findById)

module.exports = router;