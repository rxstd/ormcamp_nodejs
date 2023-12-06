var express = require("express");
var router = express.Router();

router.get("/join", function (req, res, next) {
  res.render("member/join");
});

router.get("/entry", function (req, res, next) {
  res.render("member/entry");
});

router.post("/entry", function (req, res, next) {
  const { email, password, name, phone } = req.body;
  res.redirect("/auth/login");
});

module.exports = router;
