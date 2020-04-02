var db = require("../../models")

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        db.Users.findAll({
            include: [db.Events]
        }).then(function(dbUsers){
            res.json(dbUsers);
        });
    });

    app.get("/api/users/:password", function(req, res) {
        db.Users.findOne({
            where: {
                password: req.params.password
            }
        }).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });

    //Tad created this to try and get the userId
    app.get("/api/users/:username", function(req, res) {
        db.Users.findOne({
            where: {
                username: req.params.username
            }
        }).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });

    app.post("/api/users", function(req, res) {
        db.Users.create(req.body).then(function(dbUsers) {
            res.json(dbUsers);
        });
    });
}