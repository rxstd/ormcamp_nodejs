var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/test/:name", function (req, res, next) {
  let paramsList = { ...req.params, ...req.query };
  paramsList = JSON.stringify(paramsList);
  res.render("params_test", { paramsList });
});

router.get("/test", function (req, res, next) {
  let paramsList = { ...req.params, ...req.query };
  paramsList = JSON.stringify(paramsList);
  res.render("params_test", { paramsList });
});

module.exports = router;
