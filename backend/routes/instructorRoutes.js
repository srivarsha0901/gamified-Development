const express = require("express");
const router = express.Router();
const Instructor = require("../models/Instructor");

// Instructor Register
router.post("/register", async (req, res) => {
  const { name, classAssigned, username, password } = req.body;

  if (!name || !classAssigned || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingInstructor = await Instructor.findOne({ username });
    if (existingInstructor) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const newInstructor = new Instructor({ name, classAssigned, username, password });
    await newInstructor.save();

    res.status(201).json({ message: "Instructor registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ message: "Please provide both username and password." });
  }

  try {
    // Find instructor with matching credentials
    const user = await Instructor.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password." });
    }

    // If successful
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login." });
  }
});
module.exports = router;