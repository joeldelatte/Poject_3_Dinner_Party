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

    ///......
    // app.get("/api/events/:UserId", function (req, res) {
    //     db.Events.findAll({
    //         where: {
    //             UserId: req.params.UserId
    //         },
    //     }).then(function (dbEvents) {
    //         res.json(dbEvents);
    //     });
    // });

    // app.get("/api/rsvp/events", function (req, res) {
    //     db.Events.findAll(
    //         {

    //             // where: sequelize.where(
    //             //     db.Events.sequelize.col('UserId'),
    //             //     db.Rsvps.sequelize.col('UserId')
    //             // ),
    //             //   include: [db.Rsvps]

    //         }).then(function (dbEvents) {
    //             res.json(dbEvents);
    //         });
    // });

    app.get("/api/rsvp/events/:UserId", function (req, res) {
        db.Events.findAll({
            where: {
                UserId: req.params.UserId
            },
            include:
                [{
                    model: db.Rsvps,
                    where: { UserId: req.params.UserId }
                }]
        })
            .then(function (dbEvents) {
                res.json(dbEvents);
            });
    });
}