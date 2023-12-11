var express = require("express");
var router = express.Router();

var articles = [
  {
    idx: 1, // 게시글 번호
    title: "제목1", // 게시글 제목
    content: "내용1", // 게시글 내용
    hit: 11, // 조회수
    display: true, // 게시글 공개 여부
    createdAt: Date.now() - 200000, // 게시글 등록일
    writer: "Evans", // 게시글 작성자
    ip: "1.2.3.4", // 게시글 작성자 IP
  },
  {
    idx: 2, // 게시글 번호
    title: "제목2", // 게시글 제목
    content: "내용2", // 게시글 내용
    hit: 22, // 조회수
    display: true, // 게시글 공개 여부
    createdAt: Date.now() - 100000, // 게시글 등록일
    writer: "Eddy", // 게시글 작성자
    ip: "2.3.4.5", // 게시글 작성자 IP
  },
  {
    idx: 3, // 게시글 번호
    title: "제목3", // 게시글 제목
    content: "내용3", // 게시글 내용
    hit: 33, // 조회수
    display: true, // 게시글 공개 여부
    createdAt: Date.now(), // 게시글 등록일
    writer: "Leenabi", // 게시글 작성자
    ip: "3.4.5.6", // 게시글 작성자 IP
  },
];

// Routes : GET /articles/
// Expectation : 게시글 목록을 가져온다.
router.get("/", async (req, res) => {
  res.render("article/list", { articles: articles });
});

// Routes : GET /articles/create
// Expectation : 게시글 작성 페이지를 가져온다.
router.get("/create", async (req, res) => {
  res.render("article/create");
});

// Routes : POST /articles/create
// Expectation : 게시글을 작성한다.
router.post("/create", async (req, res) => {
  const { title, writer, content, display } = req.body;

  let newIdx = articles[articles.length - 1].idx + 1;

  let newArticle = {
    idx: newIdx,
    title,
    content,
    hit: 0,
    display: display === "Y" ? true : false,
    createdAt: Date.now(),
    writer,
    ip: req.ip,
  };

  articles.push(newArticle);

  console.log("새 글 등록됨 :", newArticle);
  res.redirect("/articles");
});

// Routes : GET /articles/modify/:idx
// Expectation : 게시글 수정 페이지를 가져온다.
router.get("/modify/:idx", async (req, res) => {
  const { idx } = req.params;
  const article = articles.find((article) => article.idx === Number(idx));
  if (!article) {
    res.send(
      `<h1>게시글이 존재하지 않습니다.</h1><a href="/articles">목록으로 돌아가기</a>`
    );
  }
  res.render("article/modify", { article: article });
});

// Routes : POST /articles/modify/:idx
// Expectation : 게시글을 수정한다.
router.post("/modify/:idx", async (req, res) => {
  const { idx } = req.params;
  const { title, writer, content, display } = req.body;

  let article = articles.find((article) => article.idx === Number(idx));
  if (!article) {
    res.send(
      `<h1>게시글이 존재하지 않습니다.</h1><a href="/articles">목록으로 돌아가기</a>`
    );
  }

  article.title = title;
  article.writer = writer;
  article.content = content;
  article.display = display === "Y" ? true : false;

  console.log("수정된 글 :", article);
  res.redirect("/articles");
});

// Routes : GET /articles/delete/:idx
// Expectation : 게시글을 삭제한다.
router.get("/delete/:idx", async (req, res) => {
  const { idx } = req.params;
  const article = articles.find((article) => article.idx === Number(idx));
  if (!article) {
    res.send(
      `<h1>게시글이 존재하지 않습니다.</h1><a href="/articles">목록으로 돌아가기</a>`
    );
  }
  articles = articles.filter((article) => article.idx !== Number(idx));
  console.log("삭제된 글 :", article);
  res.redirect("/articles");
});

// Routes : GET /articles/:idx
// Expectation : 게시글을 가져온다.
router.get("/view/:idx", async (req, res) => {
  const { idx } = req.params;
  let article = articles.find((article) => article.idx === Number(idx));
  if (!article) {
    res.send(
      `<h1>게시글이 존재하지 않습니다.</h1><a href="/articles">목록으로 돌아가기</a>`
    );
  }
  article.hit++;
  console.log("조회수 증가 :", article);
  res.render("article/view", { article: article });
});

module.exports = router;
