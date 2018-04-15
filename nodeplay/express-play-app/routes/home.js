const express = require("express");
const router = express.Router();

// HOMEPAGE
router.get("/", (req, res) => {
  res.render("index", { title: "Welcome People" });
});

module.exports = router;

/*
app.get("/", (req, res) => {
  res.send("This is the home page");
});
*/
