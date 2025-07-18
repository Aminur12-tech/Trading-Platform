const { sendOTP, verifyOTP } = require("../Controllers/AuthController");
const router = require('express').Router();


router.post("/send-otp",sendOTP );
router.post("/verify-otp", verifyOTP);
module.exports = router;