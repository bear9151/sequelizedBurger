var express = require("express"),
    exphbs = require("express-handlebars"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser"),
    port = process.env.PORT || 3000,
    app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burger_controller.js");

app.use("/", routes);

app.listen(port);