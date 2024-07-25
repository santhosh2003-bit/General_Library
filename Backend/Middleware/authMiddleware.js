const jsonwebtoken = require("jsonwebtoken");
const AdminSchema = require("../Model/Admin");
const User = require("../Model/User");
const dotenv = require("dotenv");

dotenv.config();

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization header missing or malformed" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    if (!decoded._id || !decoded.role) {
      return res.status(401).json({ message: "Invalid token" });
    }

    if (decoded.role === "admin") {
      const admin = await AdminSchema.findById(decoded._id);
      if (!admin) {
        return res.status(401).json({ message: "Admin not found" });
      }
      req.admin = admin;
    } else {
      const user = await User.findById(decoded._id);
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      req.user = user;
    }

    next();
  } catch (error) {
    console.log(error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    } else {
      return res.status(500).json({ message: "Server error" });
    }
  }
};

module.exports = auth;
