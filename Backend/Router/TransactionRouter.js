const express = require("express");

const router = express.Router();
const User = require("../Model/User");
const Transaction = require("../Model/Transaction");
const Book = require("../Model/Books");

router.post("/transaction", async (req, res) => {
  const { user, book, borrowedDate, dueDate, status } = req.body;
  if (!user || !book || !borrowedDate || !dueDate || !status) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const newTransaction = new Transaction({
      user,
      book,
      borrowedDate,
      dueDate,
      status,
    });

    const savedTransaction = await newTransaction.save();

    const userData = await User.findById(user);
    // const bookData = await Book.findById(book);

    userData.bookHistory.push(savedTransaction._id);
    await userData.save();
    return res.status(200).json({
      message: "Transaction created successfully",
      transaction: savedTransaction,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.put("/returned", async (req, res) => {
  const { transactionId, returnedDate, fine, status } = req.body;
  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ error: "Transaction not found" });
    }
    transaction.returnedDate = returnedDate;
    transaction.status = status;
    if (fine != null) {
      transaction.fine = fine;
    }
    await transaction.save();

    const userData = await User.findById(transaction.user);
    if (!userData.bookHistory.includes(transaction._id)) {
      userData.bookHistory.push(transaction._id);
      await userData.save();
    }

    return res
      .status(200)
      .json({ message: "Transaction updated successfully", transaction });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.get("/all-users", async (req, res) => {
  try {
    const users = await User.find().populate("bookHistory");
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
