const Contact = require("../models/Contact");

module.exports.contact = async (req, res) => {
  try {
    const query = req.body.query;

    await Contact.insertOne(query);

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
