// Require model
var db = require("../models");

// Routes
module.exports = function (app) {

    app.get('/', function (req, res) {
        db.Burger.findAll({})
            .then(function (data) {
                res.render('index', {Burgers: data});
            })
    });

    app.post('/api/create', function (req, res) {
        db.Burger.create(
            {
                burger_name: req.body.burger_name,
            }
        ).then(function () {
            res.redirect('/');
        })
    });

    app.post('/api/update/:id', function (req, res) {
        db.Burger.update(
            {'devoured': true},
            {where: {id: req.params.id}}
        ).then(function () {
            res.redirect('/');
        })
    });

    app.post('/api/delete/:id', function (req, res) {
        db.Burger.destroy(
            {
                where: {id: req.params.id}
            }
        ).then(function () {
            res.redirect('/');
        })
    })

};