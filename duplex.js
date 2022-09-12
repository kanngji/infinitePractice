const { PassThrough, Duplex } = require("stream");

const { createReadStream, createWriteStream } = require("fs");

const readStream = createReadStream("input.txt");
const writeStream = createWriteStream("output.txt");

class Throttle extends Duplex {
  constructor(time) {
    super();
    this.delay = time;
  }

  _read() {}
  _write(chunk, encoding, callback) {
    this.push(chunk);
    setTimeout(callback, this.delay);
  }
}
const tunnel = new PassThrough();
const throttle = new Throttle();

let amount = 0;

tunnel.on("data", (chunk) => {
  amount += chunk.length;
  console.log("Bytes: ", amount);
});

readStream.pipe(tunnel).pipe(writeStream);
