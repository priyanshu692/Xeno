const mongoose = require("mongoose");

const audienceSchema = new mongoose.Schema({
  rules: [String],
  size: Number,
});

module.exports = mongoose.model("Audience", audienceSchema);
