var express = require("express");
var router = express.Router();

/* 
-routes\member.js - 사용자 계정 정보(사용자 사이트에서 가입한 사용자정보) 관리 라우팅 기능 제공
ㄴrouter.get('/list'),views\member\list.ejs
ㄴrouter.get('/create'),views\member\create.ejs
ㄴrouter.post('/create'),목록페이지 이동처리 
ㄴrouter.get('/modify'),views\member\modify.ejs
ㄴrouter.post('/modify'),목록페이지 이동처리
ㄴrouter.get('/delete'),목록페이지 이동처리  
*/
router.get("/", function (req, res, next) {
  res.render("member/dashboard");
});

router.get("/list", function (req, res, next) {
  res.render("member/list", {
    schOption: { title: "", isDisplay: "", boardTypeCode: "" },
  });
});

router.post("/list", function (req, res, next) {
  res.render("member/list", {
    schOption: {
      title: req.body.boardTypeCode,
      isDisplay: req.body.title,
      boardTypeCode: req.body.isDisplay,
    },
  });
});

router.get("/create", function (req, res, next) {
  res.render("member/create");
});

router.post("/create", function (req, res, next) {
  res.redirect("/member/list");
});

router.get("/modify", function (req, res, next) {
  res.render("member/modify");
});

router.post("/modify", function (req, res, next) {
  res.redirect("/member/list");
});

router.get("/delete", function (req, res, next) {
  res.redirect("/member/list");
});

module.exports = router;
