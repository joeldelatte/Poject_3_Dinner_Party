const express = require("express");
const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

var db = require("./models");

app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());
  
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require("./routes/api/events-api-routes")(app);
require("./routes/api/user-api-routes")(app);
require("./routes/api/rsvp-api-routes")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    });
});

