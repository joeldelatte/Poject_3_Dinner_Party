var db = require("../../models");

module.exports = function (app) {

    //Tad made this to see if I could get Postman to work.  It does, but cannot get React to work now...
    app.get("/api/events", function (req, res) {
        db.Events.findAll({}).then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    //This is another one that Tad created for trying to pull events based on UserId value...
    app.get("/api/events/:UserId", function (req, res) {
        db.Events.findAll({
            where: {
                UserId: req.params.UserId
            },
        }).then(function (dbEvents) {
            res.json(dbEvents);
        });
    });
}