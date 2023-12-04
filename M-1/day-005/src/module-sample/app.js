const { oddString, evenString } = require("./base1");
const { checkOddOrEven, test } = require("./base2");

test();

console.log(oddString);
console.log(evenString);

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return oddString;
  }
  return evenString;
}

let testString = "hello";

console.log(
  `${testString}의 문자열 길이는 ${checkStringOddOrEven(testString)} (${
    testString.length
  })`
);

testString = "안녕하세요";

console.log(
  `${testString}의 문자열 길이는 ${checkStringOddOrEven(testString)} (${
    testString.length
  })`
);
