const { createReadStream, createWriteStream } = require("fs");

const { Transform } = require("stream");

var readable = createReadStream("input.txt");
var writeable = createWriteStream("output.txt");
const TransformToUpperCase = () => {
  return new Transform({
    transform(chunk, enc, callback) {
      const uppercase = chunk.toString().toUpperCase();
      callback(null, uppercase);
    },
  });
};
const uppercase = TransformToUpperCase();
readable.pipe(uppercase).pipe(writeable);
console.log("Transform Completed");
