var express = require("express");
var router = express.Router();

/* 
-routes\admin.js - 관리자 사이트 관리자 계정 정보관리 라우팅 기능 제공
ㄴrouter.get('/list'),views\admin\list.ejs
ㄴrouter.get('/create'),views\admin\create.ejs
ㄴrouter.post('/create'),목록페이지 이동처리 
ㄴrouter.get('/modify'),views\admin\modify.ejs
ㄴrouter.post('/modify'),목록페이지 이동처리
ㄴrouter.get('/delete'),목록페이지 이동처리 
*/
router.get("/", function (req, res, next) {
  res.render("admin/dashboard");
});

router.get("/list", function (req, res, next) {
  res.render("admin/list", {
    schOption: { title: "", isDisplay: "", boardTypeCode: "" },
  });
});

router.post("/list", function (req, res, next) {
  res.render("admin/list", {
    schOption: {
      title: req.body.boardTypeCode,
      isDisplay: req.body.title,
      boardTypeCode: req.body.isDisplay,
    },
  });
});

router.get("/create", function (req, res, next) {
  res.render("admin/create");
});

router.post("/create", function (req, res, next) {
  res.redirect("/admin/list");
});

router.get("/modify", function (req, res, next) {
  res.render("admin/modify");
});

router.post("/modify", function (req, res, next) {
  res.redirect("/admin/list");
});

router.get("/delete", function (req, res, next) {
  res.redirect("/admin/list");
});

module.exports = router;
