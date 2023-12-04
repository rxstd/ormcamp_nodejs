const oddString = "홀수입니다.";
const evenString = "짝수입니다.";

console.log("base1.js 모듈 시작");

function test() {
  console.log("Base1 test() 호출");
}

//base1 모듈에서 정의된 각종 상수와 변수를 외부에서 사용할 수 있도록 exports 객체에 추가
module.exports = {
  test, // key와 value가 같으면 key 생략 가능, key와 value가 다르게 하려면 key를 따로 명시하면 됨
  oddString,
  evenString,
};
