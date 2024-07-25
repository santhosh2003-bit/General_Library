const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    book: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true },
    borrowedDate: { type: String, required: true },
    dueDate: { type: String, required: true },
    status: { type: String, required: true, enum: ["borrowed", "returned"] },
    returnedDate: { type: String },
    fine: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("transaction", TransactionSchema);
