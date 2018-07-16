const router = require("express").Router();
const bookRoutes = require("./propertys");

// Book routes
router.use("/propertys", bookRoutes);

module.exports = router;
