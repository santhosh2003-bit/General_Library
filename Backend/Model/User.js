const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  contactNumber: { type: String, required: true },
  role: { type: String, default: "user" },
  bookHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: "transaction" }],
});

module.exports = mongoose.model("user", UserSchema);
