// Dependencies, and Express setup
var express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    exphbs = require("express-handlebars"),
    db = require('./models'),
    app = express(),
    port = process.env.PORT || 3000;

// Allow data parsing for Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static Directory
app.use(express.static(process.cwd() + "/public"));

// Method override & Handlebars enabled
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use("/", routes);
require("./controllers/burgers_controller.js")(app);

// sync sequelize models and start express server
db.sequelize.sync({ }).then(function() {
    // starting server w/ listener
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    });
});