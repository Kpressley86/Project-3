const router = require("express").Router();
const saveRoutes = require("./saves");

// Save routes
router.use("/save", saveRoutes);

module.exports = router;
