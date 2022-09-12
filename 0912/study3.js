var url = require("url");

var webaddress = "http://localhost:3000/index.html?name=kangji&age=29";

var part = url.parse(webaddress, true);
console.log(part.host);
console.log(part.port);
console.log(part.pathname);
console.log(part.search);
console.log(part.query);
console.log(part.query.name);
console.log(part.query.age);
