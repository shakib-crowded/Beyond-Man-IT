const mongoose = require("mongoose");

const ProjectSchema = mongoose.Schema({
  fullName: {
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

  location: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  features: {
    type: [String],
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  timeline: {
    type: String,
    required: true,
  },
  reviewed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
