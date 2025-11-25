const mongoose = require("mongoose");

const NewsLetterSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    unique: true,
  },
});

module.exports = mongoose.model("NewsLetter", NewsLetterSchema);
