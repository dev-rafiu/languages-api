const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
  },
  year: {
    type: String,
  },
});

module.exports = mongoose.model("Language", languageSchema);
