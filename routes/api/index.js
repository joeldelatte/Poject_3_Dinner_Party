const router = require("express").Router();
const eventsRoutes = require("./events-api-routes");
const userRoutes = require("./user-api-routes")
// this is copied from 21.5 may need adjustments
router.use("/events", eventsRoutes);
// how do I add a other routes? possible for Users?
router.use("/user", userRoutes);

module.exports = router;