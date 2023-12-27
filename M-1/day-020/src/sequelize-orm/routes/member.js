//사용자 정보처리를 위한 웹페이지 요청과 응답처리 전용 라우터 파일

var express = require("express");
var router = express.Router();

const db = require("../models/index");

//회원가입 웹페이지요청 및 응답처리
//http://localhost:3000/member/entry
router.get("/entry", async (req, res, next) => {
  res.render("member/entry.ejs");
});

//회원가입 웹페이지 응답처리
//http://localhost:3000/member/entry
router.post("/entry", async (req, res, next) => {
  const member = {
    //email, password
    email: req.body.email,
    password: req.body.password,
  };

  const result = await db.Member.create(member);

  console.log(result);

  res.redirect("/");
});

//회원 로그인 웹페이지요청 및 응답처리
//http://localhost:3000/member/login
router.get("/login", async (req, res, next) => {
  res.render("member/login.ejs", { resultMsg: "", email: "", password: "" });
});

//회원 로그인 웹페이지 응답처리
//http://localhost:3000/member/login
router.post("/login", async (req, res, next) => {
  const member = {
    //email, password
    email: req.body.email,
    password: req.body.password,
  };

  let resultMsg = "";

  const result = await db.Member.findOne({
    where: {
      email: member.email,
    },
  });

  if (result) {
    if (result.password === member.password) {
      resultMsg = "로그인에 성공하였습니다.";
    } else {
      resultMsg = "비밀번호가 일치하지 않습니다.";
    }
  } else {
    resultMsg = "존재하지 않는 회원입니다.";
  }

  const resCode = resultMsg === "로그인에 성공하였습니다." ? 200 : 403;

  //res.json({
  //  result: resCode,
  //  resultMsg: resultMsg,
  //});

  if (resCode === 200) {
    res.redirect("/");
  } else {
    res.render("member/login.ejs", {
      resultMsg: resultMsg,
      email: member.email,
      password: member.password,
    });
  }
});

module.exports = router;
