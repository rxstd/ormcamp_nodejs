//게시글 데이터 관리 전용 RESTFul API 라우터 파일
//기본 라우터 호출주소 : http://localhost:3000/api/article/~

var express = require("express");
var router = express.Router();

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

//신규 게시글 목록 데이터 조회 반한 API 라우팅 메소드
//http://localhost:3000/api/article/all
router.get("/all", async (req, res) => {
  //step1. API라우팅 메소드 반환형식 정의
  var apiResult = {
    code: 200,
    data: [],
    result: "Ok",
  };
  //step2. 예외처리 구문..
  try {
    //프론트엔드로 반환할 실제데이터 바인딩
    apiResult.code = 200;
    apiResult.data = articleDB;
    apiResult.result = "OK";
  } catch (err) {
    //console.log(err.message);
    //서버측 에러코드는 프론트엔드나 사용자에게 직접 정보를 제공하지 않고 대표 메세지를 안내합니다.
    //서버측 에러코드는 추후 별도 로깅시스템 구현을 통해 서버에 특정폴더내에 로드파일로 기록하거나.
    //벡엔드 에러발생 알림 시스템(sms, email등등)을 통해 실시간 에러정보를 노티해준다.
    apiResult.code = 500;
    apiResult.data = null;
    apiResult.result = "Fail";
  }

  res.json(apiResult);
});

//신규 게시글 등록처리 API 반한 라우팅 메소드
//http://localhost:3000/api/article/create
router.post("/create", async (req, res) => {
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

  const articleForm = {
    article_id: articleDB.length + 1,
    board_type_code: article.boardTypeCode,
    title: article.title,
    article_type_code: article.articleTypeCode,
    contents: article.content,
    view_count: 1,
    ip_address: "1.1.1.1",
    is_display_code: article.isDisplay,
    reg_date: article.registDate,
    reg_member_id: article.writer,
    edit_date: article.registDate,
    edit_member_id: article.writer,
  };

  console.log(articleForm);

  articleDB.push(articleForm);

  var apiResult = {
    code: 200,
    data: [],
    result: "Ok",
  };

  res.json(apiResult);
});

//단일 게시글 수정처리 API 라우팅 메소드
//http://localhost:3000/api/article/all
router.post("/update", async (req, res) => {
  var articleId = req.body.article_id;

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

  var apiResult = {
    code: 200,
    data: [],
    result: "Ok",
  };

  res.json(apiResult);
});

//단일 게시글 데이터 조회 반환 API 라우팅 메소드
//http://localhost:3000/api/article/all
router.get("/:aidx", async (req, res) => {
  var articleId = req.params.aidx;

  var article = articleDB.filter((article) => article.article_id == articleId);

  var apiResult = {
    code: 200,
    data: article,
    result: "Ok",
  };

  res.json(apiResult);
});

//단일 전체 게시글 삭제처리 API 조회 반환 라우팅 메소드
//http://localhost:3000/api/article/all
router.delete("/:aidx", async (req, res) => {
  var articleId = req.params.aidx;

  articleDB = articleDB.filter((article) => article.article_id != articleId);

  var apiResult = {
    code: 200,
    data: [],
    result: "Ok",
  };

  res.json(apiResult);
});

module.exports = router;
