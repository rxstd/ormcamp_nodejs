var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Evans's App" });
});

router.get("/test/:id", function (req, res, next) {
  res.render("index", { title: req.params.id });
});

router.get("/myip", function (req, res, next) {
  res.render("index", { title: req.ip });
});

module.exports = router;
