const { UserModel } = require("../Model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
const twilio = require("twilio");

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const otpStore = new Map();

module.exports.sendOTP = async (req, res) => {
    const { mobile } = req.body;

    if (!mobile || mobile.length !== 10) {
        return res.status(400).json({ message: "Invalid mobile number" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore.set(mobile, otp);

    try {
        await client.messages.create({
            body: `Your OTP is : ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: `+91${mobile}`,
        });
        return res.status(200).json({ success: true, message: "OTP sent successfully" });
    } catch (error) {
        console.error("Twilio Send Error:", error); // log error for debugging
        return res.status(500).json({ message: "Failed to send OTP" });
    }

}

module.exports.verifyOTP = async (req, res) => {
    const { mobile, otp } = req.body;

    if (!otpStore.has(mobile)) {
        return res.status(400).json({ message: "OTP expirsed on not not requested" });
    }

    if (otpStore.get(mobile) !== otp) {
        return res.status(401).json({ message: "Invalid OTP" });
    }

    let user = await UserModel.findOne({ mobile });

    if (!user) {
        user = await UserModel.create({ mobile, craetedAt: new Date() });
    }

    const token = createSecretToken(user._id);
    otpStore.delete(mobile);

    res.cookie("token", token, {
        withCredentials: true,
        httpsOnly: true,
        samesite: "Strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24,
    });


    return res.status(200).json({
        message: "Authentication successful",
        success: true,
        user: {
            id: user._id,
            mobile: user.mobile,
        },
    });
}