const mongoose = require("mongoose");

const ScheduleCallSchema = mongoose.Schema({
  userInfo: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: String,
      required: true,
      match: /^[0-9]{10}$/,
    },
    company: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  callType: {
    type: String,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },

  reviewed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("ScheduleCall", ScheduleCallSchema);
