const router = require("express").Router();
const invitationRoutes = require("./invitation");
// this is copied from 21.5 may need adjustments
router.use("/invitation", invitationRoutes);
// how do I add a other routes? possible for Users?
router.use("")

module.exports = router;