function fn1() {
  console.log("fn1");
}

function fn2() {
  console.log("fn2");
}

function fn3() {
  console.log("fn3");
}

// // Task 1 : fn1 -> fn2 -> fn3
// // sync
// fn1();
// fn2();
// fn3();

function afn1() {
  console.log("afn1");
}

function afn2() {
  setTimeout(() => {
    console.log("afn2");
  }, 2000);
}

function afn3() {
  console.log("afn3");
}

// Task 2 : afn1 -> afn2 -> afn3
// async
//afn1();
//afn2();
//afn3();

// Task 3 : afn1 -> afn2 -> afn3 (순서를 보장받고 싶다.)
// callback

function aafn1(cb) {
  console.log("aafn1");
  cb();
}

function aafn2(cb) {
  setTimeout(() => {
    console.log("aafn2");
    cb();
  }, 2000);
}

function aafn3(cb) {
  console.log("aafn3");
  cb();
}

// aafn1(() => {
//   // 이렇게 하면 순서를 보장받을 수 있다.
//   aafn2(() => {
//     // 다만 지금 코드처럼 객체형식으로 함수를 넘기는 식으로 작업하면 코드가 복잡해진다.
//     aafn3(() => {
//       // 이런 것을 콜백지옥 (callback hell) 이라고 한다.
//       aafn2(() => {
//         aafn3(() => {
//           console.log("end");
//         });
//       });
//     });
//   });
// });

// 다른 방법
function aaafn1() {
  console.log("aaafn1");
}

function aaafn2() {
  setTimeout(() => {
    console.log("aaafn2");
    aaafn3();
  }, 2000);
}

function aaafn3() {
  console.log("aaafn3");
}

// aaafn1();
// aaafn2();

function bfn1() {
  console.log("bfn1");
}

function bfn2(cb) {
  setTimeout(() => {
    console.log("bfn2");
    cb();
  }, 2000);
}

function bfn3() {
  console.log("bfn3");
}

bfn1();
bfn2(bfn3);
