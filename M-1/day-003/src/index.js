//설치한 오픈소스 노드 패키지를 참조한다.
//node.js에서는 require('설치패키지명') 예약어를 통해 지정한 설치된 노드패키지를 참조합니다.
const moment = require("moment"); // js 내의 Date 객체를 원하는 형식으로 포맷해주는 익스프레션 라이브러리이다.

const dotenv = require("dotenv"); // .env 파일을 읽어서 process.env로 만들어주는 모듈이다.
dotenv.config(); // .env 파일을 읽어서 process.env로 만들어준다.

// Vanilla Javascript로 현재 시간을 출력한다.
console.log("Vanilla JS TimeData", Date.now());

// Moment JS로 현재 시간을 출력한다.
console.log("Moment JS TimeData", moment().format("YYYY-MM-DD HH:mm:ss"));

// .env 파일에 저장된 환경변수를 불러온다.
console.log("dotenv 불러오기 시작");

console.log("Project Title :", process.env.PROJECT_TITLE);
console.log("Project Name :", process.env.PROJECT_NAME);

console.log("Company Name :", process.env.COMPANY_NAME);
console.log("Upload Path :", process.env.UPLOAD_PATH);
console.log("Application Path :", process.env.APPLICATION_PATH);

console.log("DB Host :", process.env.DB_HOST);
console.log("DB Port :", process.env.DB_PORT);
console.log("DB Name :", process.env.DB_NAME);
console.log("DB User :", process.env.DB_USER);
console.log("DB Password :", process.env.DB_PASSWORD);

console.log("dotenv 불러오기 완료");

//console.log("최초 생성된 NodeJS Backend Module 파일입니다.");
//console.log("로그가 잘 출력됩니다.");
//console.log("저도 배가 고파요.");
