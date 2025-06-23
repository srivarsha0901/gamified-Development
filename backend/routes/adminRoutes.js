const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

// Admin login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // OPTIONAL: Enforce only one admin (if needed)
    const count = await Admin.countDocuments();
    if (count > 1) {
      return res.status(403).json({ message: "Only one admin is allowed." });
    }

    // Send success response (you can add JWT token later)
    res.status(200).json({
      message: "Login successful",
      token: "dummy-admin-token",
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
