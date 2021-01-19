const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");

router.use("/contact", contactRoutes);



module.exports = router;