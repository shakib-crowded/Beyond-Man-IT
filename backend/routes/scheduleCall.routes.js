const express = require("express");
const { scheduleCall } = require("../controller/scheduleCall.controller");

const router = express.Router();

router.post("/schedule-call", scheduleCall);

module.exports = router;
