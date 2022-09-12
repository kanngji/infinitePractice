var http = require("http");
var fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/home" || req.url == "/") {
      var readStream = fs.createReadStream("home.html");
    } else if (req.url == "/blog") {
      var readStream = fs.createReadStream("blog.html");
    } else if (req.url == "/contact") {
      var readStream = fs.createReadStream("contact.html");
    } else if (req.url == "/404") {
      var readStream = fs.createReadStream("404.html");
    }
    readStream.pipe(res);
  })
  .listen(4000);

console.log("Server is running on 4000");
