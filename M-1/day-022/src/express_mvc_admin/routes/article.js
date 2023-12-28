var express = require("express");
var router = express.Router();

const db = require("../models/index");

/* 
-routes\article.js - 게시글 정보관리 라우팅 기능 제공
ㄴrouter.get('/list'),views\article\list.ejs
ㄴrouter.get('/create'),views\article\create.ejs
ㄴrouter.post('/create'),목록페이지 이동처리 
ㄴrouter.get('/modify'),views\article\modify.ejs
ㄴrouter.post('/modify'),목록페이지 이동처리
ㄴrouter.get('/delete'),목록페이지 이동처리 
*/
router.get("/", function (req, res, next) {
  res.render("article/dashboard");
});

router.get("/list", function (req, res, next) {
  var articles = db.Article.findAll();

  res.render("article/list", {
    articles: articles,
    schOption: { title: "0", isDisplay: "", boardTypeCode: "9" },
  });
});

router.post("/list", async function (req, res, next) {
  var searchOption = {
    title: req.body.boardTypeCode,
    isDisplay: req.body.title,
    boardTypeCode: req.body.isDisplay,
  };

  var articles = await db.Article.findAll({
    where: { board_type_code: searchOption.boardTypeCode },
  });

  res.render("article/list", {
    articles: articles,
    schOption: {
      title: req.body.boardTypeCode,
      isDisplay: req.body.title,
      boardTypeCode: req.body.isDisplay,
    },
  });
});

router.get("/create", function (req, res, next) {
  res.render("article/create");
});

router.post("/create", function (req, res, next) {
  var boardTypeCode = req.body.boardTypeCode;
  var title = req.body.title;
  var contents = req.body.contents;
  var articleTypeCode = req.body.articleTypeCode;
  var isDisplayCode = req.body.isDisplayCode;
  var register = req.body.register;

  var article = {
    board_type_code: boardTypeCode,
    title,
    contents,
    article_type_code: articleTypeCode,
    is_display_code: isDisplayCode,
    reg_member_id: register,
    reg_date: Date.now(),
  };

  res.redirect("/article/list");
});

router.get("/modify/:aid", async function (req, res, next) {
  var articleIdx = req.params.aid;

  var article = await db.Article.findOne({ where: { article_id: articleIdx } });

  res.render("article/modify", { article: article });
});

router.post("/modify/:aid", function (req, res, next) {
  var articleIdx = req.params.aid;

  var boardTypeCode = req.body.boardTypeCode;
  var title = req.body.title;
  var contents = req.body.content;
  var articleTypeCode = req.body.articleTypeCode;
  var isDisplayCode = req.body.isDisplay;
  var register = req.body.writer;

  var article = {
    board_type_code: boardTypeCode,
    title,
    contents,
    article_type_code: articleTypeCode,
    is_display_code: isDisplayCode,
    reg_member_id: register,
    reg_date: Date.now(),
  };

  const result = db.Article.update(article, {
    where: { article_id: articleIdx },
  });

  res.redirect("/article/list");
});

router.get("/delete", function (req, res, next) {
  res.redirect("/article/list");
});

module.exports = router;
