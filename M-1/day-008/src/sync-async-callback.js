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
//   aafn2(() => {
//     aafn3(() => {
//       console.log("프로세스 종료");
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

aaafn1();
aaafn2();
