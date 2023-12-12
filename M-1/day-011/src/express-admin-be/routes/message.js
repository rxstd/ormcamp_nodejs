var express = require("express");
var router = express.Router();

// -routes\message.js - 채팅 메시지 이력 정보관리 라우팅 기능 제공
// ㄴrouter.get('/list'),views\message\list.ejs
// ㄴrouter.get('/create'),views\message\create.ejs
// ㄴrouter.post('/create'),목록페이지 이동처리
// ㄴrouter.get('/modify'),views\message\modify.ejs
// ㄴrouter.post('/modify'),목록페이지 이동처리
// ㄴrouter.get('/delete'),목록페이지 이동처리

router.get("/list", function (req, res, next) {
  res.render("message/list");
});

router.get("/create", function (req, res, next) {
  res.render("message/create");
});

router.post("/create", function (req, res, next) {
  //TODO : 채팅 메시지 이력 저장 프로세스

  res.redirect("/message/list");
});

router.get("/modify", function (req, res, next) {
  res.render("message/modify");
});

router.post("/modify", function (req, res, next) {
  //TODO : 채팅 메시지 이력 수정 프로세스

  res.redirect("/message/list");
});

router.get("/delete", function (req, res, next) {
  //TODO : 채팅 메시지 이력 삭제 프로세스

  res.redirect("/message/list");
});

module.exports = router;
