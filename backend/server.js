import mysql from "mysql";

var connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

connection.end();
