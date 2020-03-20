const router = require("express").Router();
const eventsRoutes = require("./events-api-routes");
const userRoutes = require("./user-api-routes");

//Tad added this to get the tables to work
const rsvpRoutes = require("./rsvp-api-routes");

// this is copied from 21.5 may need adjustments
router.use("/events", eventsRoutes);
// how do I add a other routes? possible for Users?
router.use("/user", userRoutes);

//Tad added this to get the tables to work
router.use("/rsvp", rsvpRoutes);

module.exports = router;