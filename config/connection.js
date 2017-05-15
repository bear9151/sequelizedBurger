// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "atqnl8shus8cn560",
    password: "s1bvgtbhttxviux9",
    database: "rqd7p196rycksrxm"
});

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
