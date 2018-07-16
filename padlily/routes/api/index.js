const router = require("express").Router();
const propertyRoutes = require("./properties");

// Book routes
router.use("/properties", propertyRoutes);

module.exports = router;
