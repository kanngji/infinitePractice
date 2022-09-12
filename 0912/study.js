// const circle = require("./circle.js");
// var data = require("./data");

// // console.log(`The area is ${circle.area(4)}`);

// // console.log(`The circumferences is ${circle.cir(4)}`);

// console.log(data);

var fs = require("fs");

// const dir = "assets";
const dir = "apis";

fs.rmdir(dir, function (err) {
  console.log("Directory removed succeessfully");
});

// fs.rename(dir, new_dir, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Directory rename successfully");
//   }
// });

// fs.exists(dir, function (exist) {
//   if (exist) {
//     console.log("Directory already exists");
//   } else {
//     fs.mkdirSync(dir);
//     console.log("Directory created");
//   }
// });

// fs.readFile("demo.txt", function (err, data) {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// var data = "New Content for new file And I am changing the value";
// fs.writeFile("demo1.txt", data, function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Success. File is written");
// });
