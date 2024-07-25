const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, required: true },
    quantity: { type: Number, default: 0, min: 0 },
    available: { type: String, default: "Available", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
