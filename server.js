const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(routes);

require("./routes/api/events-api-routes");
require("./routes/api/user-api-routes");
require("./routes/api/rsvp-api-routes");

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    });
});



