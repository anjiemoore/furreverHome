const router = require("express").Router();
const Controller = require("../../controllers/Controller");

// Matches with "/api/surrender"
router.route("/surrender")
  .post(Controller.create)


// Matches with "/api/adopt"
router.route('/adopt')
  .get(Controller.findAll)
  .put(Controller.update);

// Matches with "/api/adopt/:id"
router
  .route("/adopt/:id")
  .get(Controller.findById);

module.exports = router;
