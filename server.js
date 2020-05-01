const express = require("express");
const routes = require("./routes");
const router = require("express").Router();
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(bodyParser.json());
  
app.use(bodyParser.urlencoded({ extended: true }));

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// app.use(routes);

require("./routes/api/events-api-routes")(app);
require("./routes/api/user-api-routes")(app);
require("./routes/api/rsvp-api-routes")(app);
require("./routes/api/create-api-routes")(app);

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

const PORT = process.env.PORT || 3001;
var db = require("./models");
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    });
});

