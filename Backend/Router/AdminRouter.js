const express = require("express");
const router = express.Router();
const AdminSchema = require("../Model/Admin");
const bcryptjs = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const dotenv = require("dotenv");
const Middleware = require("../Middleware/authMiddleware");
dotenv.config();
router.post("/register", async (req, res) => {
  const { userName, name, email, password, contactNumber } = req.body;
  if (!userName || !name || !email || !password || !contactNumber) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }
  const adminExist = await AdminSchema.findOne({ email: email });
  if (adminExist) {
    return res.status(400).json({ error: "Admin already exists" });
  }
  try {
    const hashedPassword = await bcryptjs.hash(password, 12);
    const Admin = new AdminSchema({
      userName: userName,
      name: name,
      email: email,
      password: hashedPassword,
      contactNumber: contactNumber,
    });
    await Admin.save();
    return res.status(200).json({ message: "Admin saved successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide all required fields" });
  }
  try {
    const admin = await AdminSchema.findOne({ email: email });
    const match = await bcryptjs.compare(password, admin.password);
    if (!admin && !match) {
      return res.status(400).json({ error: "Please Enter Valid Credentials" });
    }
    const token = jsonwebtoken.sign(
      { _id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const adminData = {
      userName: admin.userName,
      name: admin.name,
      email: admin.email,
      contactNumber: admin.contactNumber,
      role: admin.role,
    };
    return res.status(200).json({
      message: "Admin Login Successfully Completed",
      token: token,
      admin: adminData,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Server Error" });
  }
});
router.get("/admin", Middleware, async (req, res) => {
  try {
    const admin = await AdminSchema.findById(req.user._id);
    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }
    return res.status(200).json(admin);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
