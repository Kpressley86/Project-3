const router = require("express").Router();
const saveController = require("../../controllers/saveController");

// Matches with "/api/save"
router.route("/")
  .get(saveController.findAll)
  .post(saveController.create);

// Matches with "/api/save/:id"
router
  .route("/:id")
  .get(saveController.findById)
  .put(saveController.update)
  .delete(saveController.remove);

module.exports = router;
