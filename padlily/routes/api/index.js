const router = require("express").Router();
const propertiesRoutes = require("./properties");

// Property routes
router.use("/properties", propertiesRoutes);

module.exports = router;
