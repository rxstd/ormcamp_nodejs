var express = require("express");
var router = express.Router();

router.get("/list", function (req, res, next) {
  res.render("article/list");
});

router.get("/create", function (req, res, next) {
  res.render("article/create");
});

router.post("/create", function (req, res, next) {
  //TODO : 게시글 저장 프로세스

  res.redirect("/article/list");
});

router.get("/modify", function (req, res, next) {
  res.render("article/modify");
});

router.post("/modify", function (req, res, next) {
  //TODO : 게시글 수정 프로세스

  res.redirect("/article/list");
});

router.get("/delete", function (req, res, next) {
  //TODO : 게시글 삭제 프로세스

  res.redirect("/article/list");
});

module.exports = router;
