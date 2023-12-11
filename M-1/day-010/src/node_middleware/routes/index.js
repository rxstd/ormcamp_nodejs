var express = require("express");
var router = express.Router();
const { checkParams, checkQueryKey } = require("../middleware/middleware");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/test/:id", checkParams, function (req, res) {
  res.render("index", { title: "Express" });
});

router.get("/product", checkQueryKey, function (req, res) {
  res.render("index", { title: "Express" });
});

module.exports = router;
