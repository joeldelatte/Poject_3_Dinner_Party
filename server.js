const express = require("express");
// const routes = require("./routes");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");
var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());
  
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

require("./routes/api/events-api-routes")(app);
require("./routes/api/user-api-routes")(app);
require("./routes/api/rsvp-api-routes")(app);
require("./routes/api/create-api-routes")(app);

const PORT = process.env.PORT || 3001;
var db = require("./models");
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    });
});

