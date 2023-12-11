var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("product/list");
});

/* GET home page. */
router.get("/detail", function (req, res, next) {
  var productId = req.query.pid;
  var productName = req.query.pname;

  res.render("product/detail", { pid: productId, pname: productName });
});

router.get("/detail/sample", function (req, res, next) {
  res.render("product/detail", {
    pid: "sample123",
    pname: "sample123",
  });
});

router.get("/detail/:pid", function (req, res, next) {
  var productId = req.params.pid;
  var productName = req.query.pname;

  res.render("product/detail", { pid: productId, pname: productName });
});

router.get("/detail/:pid/:pname/:price", function (req, res, next) {
  var productId = req.params.pid;
  var productName = req.params.pname;
  var price = req.params.price;

  res.render("product/detail", {
    pid: productId,
    pname: productName,
    price: price,
  });
});

module.exports = router;
