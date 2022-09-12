var fs = require("fs");
var data = "Hello This is node js stream tutorial";
var readStream = fs.createReadStream("demo.txt");

readStream.on("data", function (chunk) {
  data += chunk;
});

readStream.on("end", function () {
  console.log(data);
});

readStream.on("error", function (err) {
  console.log(err.stack);
});

// var writeData = fs.createWriteStream("test.txt");

// writeData.write(data, "utf-8");

// writeData.end();

// writeData.on("finish", function () {
//   console.log("Data written successfully");
// });

// writeData.on("error", function (err) {
//   console.log(err.stack);
// });
