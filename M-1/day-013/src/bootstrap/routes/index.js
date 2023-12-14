var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  res.render("index");
});

router.get("/login", async (req, res, next) => {
  res.render("login");
});

module.exports = router;
