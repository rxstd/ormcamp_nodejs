//사용자 정보처리를 위한 RESTful 데이터 전용 요청과 응답처리 전용 라우터 파일

var express = require("express");
var router = express.Router();

const db = require("../models/index");

//회원 로그인 처리 전용 RESTful API
//localhost:3000/api/member/login
router.post("/login", async (req, res, next) => {
  var apiResult = {
    code: 200,
    data: null,
    result: "",
  };

  const member = {
    //email, password
    email: req.body.email,
    password: req.body.password,
  };

  res.json(member);

  const result = await db.Member.findOne({
    where: {
      email: member.email,
    },
  });

  if (result) {
    if (result.password === member.password) {
      apiResult.result = "로그인에 성공하였습니다.";
      apiResult.data = result;
    } else {
      apiResult.result = "비밀번호가 일치하지 않습니다.";
    }
  } else {
    apiResult.result = "존재하지 않는 회원입니다.";
  }

  apiResult.code = apiResult.result === "로그인에 성공하였습니다." ? 200 : 400;

  res.json(apiResult);
});

module.exports = router;
