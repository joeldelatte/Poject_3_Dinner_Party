var db = require("../../models");

module.exports = function(app) {
    
    app.post("/api/create", function(req, res) {
        db.Events.create(req.body).then(function(dbEvents) {
            res.json(dbEvents);
        });
    });
}