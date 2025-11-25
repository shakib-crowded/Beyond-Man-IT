const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
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
  service: {
    type: String,
    reqiured: true,
  },
  message: {
    type: String,
    required: true,
  },

  reviewed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
