const express = require("express");
const User = require("../Model/User");
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const Middleware = require("../Middleware/authMiddleware");
const Transaction = require("../Model/Transaction");
dotenv.config();
router.post("/register", async (req, res) => {
  const { userName, name, password, email, contactNumber } = req.body;
  if (!userName || !name || !password || !email || !contactNumber) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const exists = await User.findOne({ email: email });
    if (exists) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 12);
    const user = new User({
      userName: userName,
      name: name,
      password: hashedPassword,
      email: email,
      contactNumber: contactNumber,
    });
    await user.save();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const user = await User.findOne({ email: email });
    const match = await bcryptjs.compare(password, user.password);
    if (!user && !match) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = jsonwebtoken.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const userData = {
      userName: user.userName,
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
      role: user.role,
    };
    return res.status(200).json({
      message: "User Login Successfully Completed",
      token: token,
      user: userData,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.get("/person", Middleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ user: user });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.get("/transaction", async (req, res) => {
  try {
    console.log(req.user);
    const transactions = await Transaction.find({ user: req.user._id });
    if (!transactions) {
      return res.status(404).json({ error: "Transactions not found" });
    }
    return res.status(200).json({ transactions: transactions });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;
