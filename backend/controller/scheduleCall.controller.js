const ScheduleCall = require("../models/ScheduleCall");

module.exports.scheduleCall = async (req, res) => {
  const call = req.body;

  await ScheduleCall.insertOne(call);

  res.status(200).json({ success: true, message: "Your Call Scheduled" });
};
