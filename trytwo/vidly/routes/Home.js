const express = require("express");
const router = express.Router();

// GET HOMEPAGE VIEW
router.get("/", (req, res) => {
  res.render("index");
});
module.exports = router;
