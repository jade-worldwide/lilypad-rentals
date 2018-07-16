const router = require("express").Router();
const booksController = require("../../controllers/propertysController");

// Matches with "/api/books"
router.route("/")
  .get(propertysController.findAll)
  .post(propertysController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(propertysController.findById)
  .put(propertysController.update)
  .delete(propertysController.remove);

module.exports = router;