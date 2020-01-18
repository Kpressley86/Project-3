const router = require("express").Router();
const saveRoutes = require("./save");

// Book routes
router.use("/save", saveRoutes);

module.exports = router;