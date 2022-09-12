const fs = require("fs");
const zlib = require("zlib");

var readStream = fs.createReadStream("input.txt");
var writeStream = fs.createWriteStream("input.txt.gz");

var gzip = zlib.createGzip();
readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on("finish", function () {
    console.log("Successfully Zip created");
  });
