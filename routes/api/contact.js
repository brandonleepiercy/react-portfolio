const router = require('express').Router();
const contactController = require("../../controllers/contactController");

router.route("/")
    .post(contactController.create)
    .get(contactController.findAll);
    
module.exports = router;