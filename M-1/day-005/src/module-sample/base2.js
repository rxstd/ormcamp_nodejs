//base1 모듈에서 제공해주는 각종 상수와 함수를 참조한다.
//다른 모듈/설치된 노드패키지의 기능을 사용하기 위해서는 require라는 예약어 함수를 사용한다.
const { oddString, evenString, test } = require("./base1");

console.log("base2.js 모듈 시작");

function checkOddOrEven(num) {
  if (num % 2) {
    return oddString;
  }
  return evenString;
}

var res = checkOddOrEven(10);
//console.log("10은", res);
console.log(`10은 ${res}`);

module.exports = {
  checkOddOrEven,
  test,
};
