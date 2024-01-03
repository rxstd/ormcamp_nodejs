const express = require("express");
const router = express.Router();

let articleDB = [
  {
    article_id: 1,
    board_type_code: 1,
    title: "첫 게시글",
    article_type_code: 1,
    contents: "안녕하세요. 첫 게시글입니다.",
    view_count: 1,
    ip_address: "1.1.1.1",
    is_display_code: 1,
    reg_date: "2023-01-01 15:32:55",
    reg_member_id: "admin",
    edit_date: "2023-01-01 15:32:55",
    edit_member_id: "admin",
  },
  {
    article_id: 2,
    board_type_code: 1,
    title: "두번째 게시글",
    article_type_code: 1,
    contents: "안녕하세요. 두번째 게시글입니다.",
    view_count: 1,
    ip_address: "2.2.2.2",
    is_display_code: 1,
    reg_date: "2023-03-22 12:12:44",
    reg_member_id: "eddy",
    edit_date: "2023-03-22 12:12:44",
    edit_member_id: "eddy",
  },
  {
    article_id: 3,
    board_type_code: 2,
    title: "세번째 게시글",
    article_type_code: 1,
    contents: "안녕하세요. 세번째 게시글입니다.",
    view_count: 1,
    ip_address: "3.3.3.3",
    is_display_code: 0,
    reg_date: "2023-05-15 04:56:05",
    reg_member_id: "evans",
    edit_date: "2023-05-15 04:56:05",
    edit_member_id: "evans",
  },
  {
    article_id: 4,
    board_type_code: 3,
    title: "네번째 게시글",
    article_type_code: 1,
    contents: "안녕하세요. 네번째 게시글입니다.",
    view_count: 1,
    ip_address: "4.4.4.4",
    is_display_code: 1,
    reg_date: "2023-08-30 18:41:07",
    reg_member_id: "james",
    edit_date: "2023-08-30 18:41:07",
    edit_member_id: "james",
  },
  {
    article_id: 5,
    board_type_code: 1,
    title: "다섯번째 게시글",
    article_type_code: 1,
    contents: "안녕하세요. 다섯번째 게시글입니다.",
    view_count: 1,
    ip_address: "5.5.5.5",
    is_display_code: 0,
    reg_date: "2023-12-12 11:11:11",
    reg_member_id: "admin",
    edit_date: "2023-12-12 11:11:11",
    edit_member_id: "admin",
  },
];

router.get("/list", async (req, res, next) => {
  var schOption = {
    boardTypeCode: "",
    title: "",
    isDisplay: "",
  };
  res.render("article/list", { articleDB, schOption });
});

router.post("/list", async (req, res, next) => {
  var schOption = {
    boardTypeCode: req.body.boardTypeCode,
    title: req.body.title,
    isDisplay: req.body.isDisplay,
  };
  res.render("article/list", { articleDB, schOption });
});

router.get("/create", async (req, res, next) => {
  res.render("article/create");
});

router.post("/create", async (req, res, next) => {
  var boardTypeCode = req.body.boardTypeCode;
  var title = req.body.title;
  var content = req.body.content;
  var articleTypeCode = req.body.articleTypeCode;
  var isDisplay = req.body.isDisplay;
  var writer = req.body.writer;

  const article = {
    boardTypeCode,
    title,
    content,
    articleTypeCode,
    isDisplay,
    writer,
    registDate: new Date(Date.now()).toLocaleString(),
  };

  console.log(article);

  res.redirect("/article/list");
});

router.get("/modify/:aid", async (req, res, next) => {
  var articleId = req.params.aid;

  const article = articleDB.find((article) => article.article_id == articleId);

  res.render("article/modify", { article });
});

router.post("/modify/:aid", async (req, res, next) => {
  var articleId = req.params.aid;

  var boardTypeCode = req.body.boardTypeCode;
  var title = req.body.title;
  var content = req.body.content;
  var articleTypeCode = req.body.articleTypeCode;
  var isDisplay = req.body.isDisplay;
  var writer = req.body.writer;

  articleDB = articleDB.map((article) => {
    if (article.article_id == articleId) {
      article.board_type_code = boardTypeCode;
      article.title = title;
      article.contents = content;
      article.article_type_code = articleTypeCode;
      article.is_display_code = isDisplay;
      article.edit_member_id = writer;
      article.edit_date = new Date(Date.now()).toLocaleString();
    }
    return article;
  });

  res.redirect("/article/list");
});

router.get("/delete", async (req, res, next) => {
  var articleId = req.query.article_id;

  articleDB = articleDB.filter((article) => article.article_id != articleId);

  res.redirect("/article/list");
});

module.exports = router;
