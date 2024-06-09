const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/AdminSchema");
const Challenge = require("../models/Challenge");
const { protect } = require("../middleware/authmiddleware"); // Import the protect middleware

// Admin Login Route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin) {
    return res.status(400).json({ error: "Invalid username" });
  }

  const validPassword = await bcrypt.compare(password, admin.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const token = jwt.sign({ adminId: admin._id }, "secretkey");
  res.status(200).json({ message: "Login successful", token });
});

// Create Challenge Route
router.post("/challenge", protect, async (req, res) => {
  const { title, description, startDate, endDate } = req.body;

  try {
    const challenge = new Challenge({ title, description, startDate, endDate });
    await challenge.save();
    res.status(201).json({ message: "Challenge created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get All Challenges Route
router.get("/challenges", protect, async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.status(200).json(challenges);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Challenge By ID Route
router.get("/challenges/:id", protect, async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) {
      return res.status(404).json({ error: "Challenge not found" });
    }
    res.status(200).json(challenge);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update Challenge Route
router.put("/challenges/:id", protect, async (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  try {
    const challenge = await Challenge.findByIdAndUpdate(
      req.params.id,
      { title, description, startDate, endDate },
      { new: true }
    );
    if (!challenge) {
      return res.status(404).json({ error: "Challenge not found" });
    }
    res.status(200).json(challenge);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete Challenge Route
router.delete("/challenges/:id", protect, async (req, res) => {
  try {
    const challenge = await Challenge.findByIdAndDelete(req.params.id);
    if (!challenge) {
      return res.status(404).json({ error: "Challenge not found" });
    }
    res.status(200).json({ message: "Challenge deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
