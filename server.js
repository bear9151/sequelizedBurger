var express = require("express");
var bodyParser = require("body-parser");
// var methodOverride = require("method-override");

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

// app.use("/", routes);
// app.use("/update", routes);
// app.use("/create", routes);
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

// listen on port 3000
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("App listening on PORT " + port);
});