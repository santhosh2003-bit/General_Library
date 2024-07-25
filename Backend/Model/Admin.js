const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  contactNumber: { type: String, required: true },
  role: { type: String, default: "admin" },
});

module.exports = mongoose.model("Admin", AdminSchema);
