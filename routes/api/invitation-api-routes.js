var db = require("../../models");

module.exports = function(app) {
    // this findall will be used to populate the feed 
    app.get("/api/invitations", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Invitation.findAll({
            where: query,
            include: [db.Invitation]
        }).then(function(dbInvitation) {
            res.json(dbInvitation);
        });
    });
    
    // this findOne may not be necessary?...
    app.get("/api/posts/:id", function(req, res) {
        db.Invitation.findOne({
           where: {
               id: req.params.id
           },
           include: [db.User] 
        }).then(function(dbInvitation) {
            res.json(dbInvitation);
        });
    });

    // POST route for saving new Invitation
    app.post("api/posts", function(req, res) {
        db.Invitation.create(req.body).then(function(dbInvitation) {
            res.json(dbInvitation);
        });
    });

    // Dont know if we need an update function but I'm adding it
    app.put("/api/posts", function(req, res) {
        db.Invitation.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbInvitation) {
                res.json(dbInvitation);
        });
    });
}