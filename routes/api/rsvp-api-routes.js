var db = require("../../models")

module.exports = function (app) {
    app.get("/api/rsvp", function (req, res) {
        db.User.findAll({
            include: [db.Rsvps]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
}