var express = require("express");
var router = express.Router();

router.get("/login", function (req, res, next) {
  res.render("auth/login", { title: "Express" });
});

router.post("/login", function (req, res, next) {
  const { username, password } = req.body;
  res.json({ username, password });
});

router.get("/logout", function (req, res, next) {
  res.redirect("/");
});

module.exports = router;
