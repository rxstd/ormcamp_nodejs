var express = require("express");
var router = express.Router();

router.get("/list", function (req, res, next) {
  res.render("member/list");
});

router.get("/create", function (req, res, next) {
  res.render("member/create");
});

router.post("/create", function (req, res, next) {
  //TODO : 사용자 계정 저장 프로세스

  res.redirect("/member/list");
});

router.get("/modify", function (req, res, next) {
  res.render("member/modify");
});

router.post("/modify", function (req, res, next) {
  //TODO : 사용자 계정 수정 프로세스

  res.redirect("/member/list");
});

router.get("/delete", function (req, res, next) {
  //TODO : 사용자 계정 삭제 프로세스

  res.redirect("/member/list");
});

module.exports = router;
