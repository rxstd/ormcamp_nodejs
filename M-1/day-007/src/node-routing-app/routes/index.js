var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/main", function (req, res, next) {
  res.render("main", { title: "Express" });
});

router.get("/company", function (req, res, next) {
  res.render("company", { companyName: "NETFLIX", ceo: "추원혁" });
});

//회사 제품소개 웹페이지 요청과 응담 처리 라우팅 메소드
//회사 주소체계: http://localhost:3000/products/computer
router.get("/products/computer", function (req, res) {
  //단일 컴퓨터 정보 json 데이터
  const computer = {
    computer: {
      brand: "LG전자",
      productName: "LG그램 17",
      price: Number("1700000").toLocaleString() + "원",
      img: "https://www.lge.co.kr/kr/images/notebook/md08917842/gallery/medium01.jpg",
    },
  };

  res.render("computer", computer);
});

module.exports = router;
