// Dependencies, and Express setup
var express = require("express");
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var app = express();
var db = require('./models');

// Allow data parsing for Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Setup Handlebars
var exphbs = require("express-handlebars");

// Handlebars enabled
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Static Directory
app.use(express.static(process.cwd() + "/public"));
// app.use(express.static("./public"));

// Require routes
require("./routes/api-routes.js")(app);

// sync sequelize models and start express server
db.sequelize.sync({ force:true }).then(function() {
    // starting server w/ listener
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});