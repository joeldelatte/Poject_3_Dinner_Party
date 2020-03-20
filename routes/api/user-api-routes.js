var db = requrie("../models")

module.exports = function(app) {
    app.get("/api/users", function(req, res) {
        db.User.findAll({
            include: [db.Invitation]
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });

    app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    });
}