const Project = require("../models/Project");

module.exports.submitProject = async (req, res) => {
  try {
    const {
      title,
      features,
      timeline,
      budget,
      teamSize,
      fullName,
      email,
      phone,
      location,
    } = req.body;

    if (
      !title ||
      !features ||
      !timeline ||
      !budget ||
      !teamSize ||
      !fullName ||
      !email ||
      !phone ||
      !location
    ) {
      return res.status(401).json({ error: "Please Fill All Required Inputs" });
    }

    const project = {
      title,
      features,
      timeline,
      budget,
      teamSize,
      fullName,
      email,
      phone,
      location,
    };

    await Project.insertOne(project);
    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log("An Error Occurred: ", error);
    return res.status(500).json(error);
  }
};
