const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Express App Using Pug" });
});

module.exports = router;
