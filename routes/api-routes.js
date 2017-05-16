// Require model
var db = require("../models");

// Routes
module.exports = function (app) {

    app.get('/', function (req, res) {
        db.sequelizedBurger.findAll({})
            .then(function (data) {
                res.render('index', {burger: data});
            })
    });

    app.post('/api/create', function (req, res) {
        db.sequelizedBurger.create(
            {
                burger_name: req.body.burger_type,
            }
        ).then(function () {
            res.redirect('/');
        })
    });

    app.post('/api/update/:id', function (req, res) {
        db.sequelizedBurger.update(
            {'devoured': true},
            {where: {id: req.params.id}}
        ).then(function () {
            res.redirect('/');
        })
    });

    app.post('/api/delete/:id', function (req, res) {
        db.sequelizedBurger.destroy(
            {
                where: {id: req.params.id}
            }
        ).then(function () {
            res.redirect('/');
        })
    })

};