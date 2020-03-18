const router = require("express").Router();
const invitationRoutes = require("./invitation");
// this is copied from 21.5 may need adjustments
router.use("/invitation", invitationRoutes);

module.exports = router;