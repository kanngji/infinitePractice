var fs = require("fs");

var writeStream = fs.createWriteStream("myfile.txt");

process.stdin.pipe(writeStream);
