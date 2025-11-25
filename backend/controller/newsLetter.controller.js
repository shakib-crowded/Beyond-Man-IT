const NewsLetter = require("../models/NewsLetter");

module.exports.newsLetter = async (req, res) => {
  try {
    const { email } = req.body;

    const alreadyEmail = await NewsLetter.findOne({ email });

    if (alreadyEmail) {
      res
        .status(400)
        .json({ success: false, message: "Email is Already Subscribed!" });
    }

    await NewsLetter.insertOne({ email });

    return res
      .status(200)
      .json({ success: true, message: "Email Successfully Submitted" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Sorry, Couldn't Send Email Try Again Later...",
    });
  }
};
