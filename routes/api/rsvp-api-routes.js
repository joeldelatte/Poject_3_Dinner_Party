var db = require("../../models")
var sequelize = require("sequelize");


module.exports = function (app) {
    app.get("/api/rsvp", function (req, res) {
        db.Rsvps.findAll({})
            .then(function (dbUsers) {
                res.json(dbUsers);
            });
    });

    app.post("/api/rsvp", function (req, res) {
        db.Rsvps.create(req.body).then(function (dbUsers) {
            res.json(dbUsers);
        });
    });

    app.get("/api/rsvp/:UserId", function (req, res) {
        db.Rsvps.findAll({
            where: {
                UserId: req.params.UserId
            },
            include:
            [{
                model: db.Events
            }]
        }).then(function (dbEvents) {
            res.json(dbEvents);
        });
    });
}