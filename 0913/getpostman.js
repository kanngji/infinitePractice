const http = require("http");

// 폴더 경로 ./ 붙여서 적기
const data = require("./source");
// const data = {
//   name: "kangji",
//   age: 29,
//   email: "kangji@gmail.com",
// };
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
    // res.write(data);
    res.end();
  })
  .listen(4000);
