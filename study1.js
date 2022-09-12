const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello Developeprs. Welcome to node.");
    res.write(`Url is : ${req.url}`);
    res.end();
  })
  .listen(4000);
