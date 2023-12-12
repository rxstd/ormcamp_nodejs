var express = require("express");
var router = express.Router();

router.get("/list", function (req, res, next) {
  res.render("channel/list");
});

router.get("/create", function (req, res, next) {
  res.render("channel/create");
});

router.post("/create", function (req, res, next) {
  //TODO : 채팅방 저장 프로세스

  res.redirect("/channel/list");
});

router.get("/modify", function (req, res, next) {
  res.render("channel/modify");
});

router.post("/modify", function (req, res, next) {
  //TODO : 채팅방 수정 프로세스

  res.redirect("/channel/list");
});

router.get("/delete", function (req, res, next) {
  //TODO : 채팅방 삭제 프로세스

  res.redirect("/channel/list");
});

module.exports = router;
