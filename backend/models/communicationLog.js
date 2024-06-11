const mongoose = require("mongoose");

const communicationLogSchema = new mongoose.Schema({
  audienceId: { type: mongoose.Schema.Types.ObjectId, ref: "Audience" },
  message: String,
  status: { type: String, enum: ["SENT", "FAILED"], default: "SENT" },
});

module.exports = mongoose.model("CommunicationLog", communicationLogSchema);
