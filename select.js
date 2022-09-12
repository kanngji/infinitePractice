var mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

var con = mysql.createConnection({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: process.env.DATA_BASE_PASSWORD,
  database: "study0913",
});

con.connect((err) => {
  if (err) {
    throw err;
  }
  let sql = "SELECT * FROM `student`";

  con.query(sql, (err, res) => {
    if (err) {
      throw err;
    }
    console.log(res);
  });
});
