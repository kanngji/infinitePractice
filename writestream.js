var fs = require("fs");
var data = "Node js write stream example";

var writeStream = fs.createWriteStream("output.txt");

writeStream.write(data, "utf-8");
writeStream.end();

writeStream.on("finish", function () {
  console.log("Successfully written data to the output file");
});

writeStream.on("error", function (err) {
  console.log(err.stack);
});
