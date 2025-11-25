const express = require("express");
const router = express.Router();
const { sendOtp, verifyOtp } = require("../controller/otp.controller");

// Send OTP endpoint
router.post("/send-otp", sendOtp);

// Verify OTP endpoint
router.post("/verify-otp", verifyOtp);

module.exports = router;
