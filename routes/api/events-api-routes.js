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





    // this findall will be used to populate the feed 
    app.get("/api/events/", function (req, res) {
        var query = {};
        if (req.query.UserId) {
            query.UserId = req.query.UserId;
        }
        db.Events.findAll({
            where: query,
            include: [db.Events]
        }).then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    // this findOne may not be necessary?...
    app.get("/api/posts/:id", function (req, res) {
        db.Events.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    // // POST route for saving new Events
    app.post("api/events", function (req, res) {
        db.Events.create(req.body).then(function (dbEvents) {
            res.json(dbEvents);
        });
    });

    // Dont know if we need an update function but I'm adding it
    app.put("/api/posts", function (req, res) {
        db.Events.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbEvents) {
                res.json(dbEvents);
            });
    });
}