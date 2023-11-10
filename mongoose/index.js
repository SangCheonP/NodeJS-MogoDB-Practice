const mongoose = require("mongoose");

const connect = () => {
  // 개발 환경이면 debug 모드를 true
  if (process.env.NODE_ENV !== "production") {
    mongoose.set("debug", true);
  }

  // 연결 관리
  mongoose.connect(
    // 사용자를 관리하는 DB를 넣어줌
    "mongodb://root:1234@localhost:27017/admin",
    {
      // 접속 후, 사용하는 DB
      dbName: "kwic",
    },
    // 에러시
    (error) => {
      if (error) {
        console.error("mongodb 연결 에러", error);
      } else {
        console.log("mongodb 연결 성공", "localhost:27017/admin");
      }
    }
  );
};

// 접속 시도했는데 에러시 실행
mongoose.connection.on("error", (error) => {
  console.error("mongodb 연결 에러", error);
});

// 접속 했는데, DB가 연결이 안 되어 있는 상태시 실행
mongoose.connection.on("disconnected", () => {
  console.error("mongodb 연결 종료됨");
  connect();
});

// 다른 외부에서 함수로 연결해서 사용할 수 있게
module.exports = {
  connect,
};
