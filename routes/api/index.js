const router = require("express").Router();
const eventsRoutes = require("./events-api-routes");
const userRoutes = require("./user-api-routes");
const rsvpRoutes = require("./rsvp-api-routes");
const createRoutes = require("./create-api-routes");

router.use("/events", eventsRoutes);

router.use("/user", userRoutes);

router.use("/rsvp", rsvpRoutes);

router.use("/create", createRoutes);

module.exports = router;