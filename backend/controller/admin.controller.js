const Admin = require("../models/Admin");
const jsonwebtoken = require("jsonwebtoken");
const Project = require("../models/Project");
const ScheduleCall = require("../models/ScheduleCall");
const NewsLetter = require("../models/NewsLetter");
const Contact = require("../models/Contact");

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Please fill in all fields" });
    }

    const admin = await Admin.findOne({ email }).select("+password");

    if (!admin)
      return res
        .status(401)
        .json({ success: false, message: "Admin Not Found..." });

    const passwordMatch = await admin.comparePassword(password);

    if (!passwordMatch)
      return res
        .status(401)
        .json({ success: false, message: "Incorrect Credentials..." });

    const token = jsonwebtoken.sign(
      { adminId: admin._id },
      process.env.MY_SUPER_SECRET,
      {
        expiresIn: "8h",
      }
    );

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: false,
      message: "Coudn't login: Internal Error, try after sometime...",
    });
  }
};

module.exports.dashboard = async (req, res) => {
  const projects = await Project.find();
  const scheduleCalls = await ScheduleCall.find();
  const newsLetters = await NewsLetter.find();
  const contacts = await Contact.find();

  return res.json({
    success: true,
    message: "Welcome Admin",
    projects,
    scheduleCalls,
    newsLetters,
    contacts,
  });
};

module.exports.projectReview = async (req, res) => {
  try {
    const { projectId } = req.query;
    const project = await Project.findById(projectId);

    await project.updateOne({ reviewed: !project.reviewed });
    res.status(200).json({ success: true, message: "Project Review Changed!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};

module.exports.projectDelete = async (req, res) => {
  try {
    const { projectId } = req.query;

    await Project.deleteOne({ _id: projectId });
    res
      .status(200)
      .json({ success: true, message: "Project Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};

module.exports.callReview = async (req, res) => {
  try {
    const { callId } = req.query;

    const call = await ScheduleCall.findById(callId);

    await call.updateOne({ reviewed: !call.reviewed });
    res
      .status(200)
      .json({ success: true, message: "Schedule Call Review Changed!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};
module.exports.callDelete = async (req, res) => {
  try {
    const { callId } = req.query;

    await ScheduleCall.deleteOne({ _id: callId });
    res
      .status(200)
      .json({ success: true, message: "Schedule Call Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};

module.exports.newsLettersDelete = async (req, res) => {
  try {
    const { newsLetterId } = req.query;

    await NewsLetter.deleteOne({ _id: newsLetterId });
    res
      .status(200)
      .json({ success: true, message: "News Letter Deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};

module.exports.contactDelete = async (req, res) => {
  try {
    const { contactId } = req.query;

    await Contact.deleteOne({ _id: contactId });
    res
      .status(200)
      .json({ success: true, message: "Contact Deleted Successfully!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};

module.exports.contactReview = async (req, res) => {
  try {
    const { contactId } = req.query;

    const contact = await Contact.findById(contactId);

    await contact.updateOne({ reviewed: !contact.reviewed });
    res.status(200).json({ success: true, message: "Contact Review Changed!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Error", error });
  }
};
