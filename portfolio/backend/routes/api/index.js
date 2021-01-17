const path = require("path");
const router = require("express").Router();
const contactRoutes = require("./contact");

router.use("/contact", contactRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../../client/public/index.html"))
});

module.exports = router;