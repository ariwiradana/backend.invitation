const mongoose = require("mongoose");

const WishesSchema = mongoose.Schema({
  name: String,
  message: String,
  created_at: Number,
  attend: Boolean,
});

module.exports = mongoose.model("wishes", WishesSchema);
