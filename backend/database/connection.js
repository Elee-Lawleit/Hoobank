const mysql = require("mysql2");

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "hoobank"
});

module.exports = connection.promise();