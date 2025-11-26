require("dotenv").config();
const transporter = require("../utils/mailSender");
const redis = require("../utils/redis");

// Generate 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

module.exports.sendOtp = async (req, res) => {
  try {
    const { email, fullName } = req.body;

    if (!email || !fullName) {
      return res
        .status(400)
        .json({ success: false, message: "Email and full name are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    const otp = generateOTP();

    // Save in Redis for 10 minutes
    await redis.set(`otp:${email}`, JSON.stringify({ otp, attempts: 0 }), {
      ex: 600,
    });

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP for Project Submission on Beyond Man IT",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; color: white; border-radius: 10px 10px 0 0;">
            <h2 style="margin: 0; font-size: 24px;">Email Verification</h2>
          </div>
          <div style="background: #f5f5f5; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="color: #333; font-size: 16px;">Hi <strong>${fullName}</strong>,</p>
            <p style="color: #666; font-size: 14px;">Use the OTP below to verify your email address.</p>
            <div style="text-align: center; margin: 30px 0;">
              <div style="display: inline-block; background: white; padding: 20px 40px; border-radius: 10px; border: 2px solid #667eea;">
                <p style="font-size: 32px; font-weight: bold; color: #667eea; letter-spacing: 5px; margin:0">
                  ${otp}
                </p>
              </div>
            </div>
            <p style="color: #666; font-size: 14px;">This OTP will expire in 10 minutes.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(200)
      .json({ success: true, message: "OTP sent successfully to your email" });
  } catch (error) {
    console.error("Send OTP Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again later.",
    });
  }
};

module.exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res
        .status(400)
        .json({ success: false, message: "Email and OTP are required" });
    }

    const data = await redis.get(`otp:${email}`);

    if (!data) {
      return res
        .status(400)
        .json({ success: false, message: "OTP not found or expired." });
    }

    const storedOTPData = data;

    // Too many attempts?
    if (storedOTPData.attempts >= 3) {
      await redis.del(`otp:${email}`);
      return res.status(400).json({
        success: false,
        message: "Maximum OTP attempts exceeded. Please request a new OTP.",
      });
    }

    // OTP mismatch
    if (storedOTPData.otp !== otp) {
      storedOTPData.attempts += 1;

      // Update attempts
      await redis.set(`otp:${email}`, JSON.stringify(storedOTPData), {
        ex: 600,
      });

      const remaining = 3 - storedOTPData.attempts;

      return res.status(400).json({
        success: false,
        message: `Invalid OTP. ${remaining} attempt(s) remaining.`,
      });
    }

    // OTP correct → delete it
    await redis.del(`otp:${email}`);

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    console.error("Verify OTP Error:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to verify OTP. Please try again later.",
    });
  }
};
