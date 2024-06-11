const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  totalSpends: { type: Number, required: true },
  visits: { type: Number, required: true },
  lastVisit: { type: Date, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
