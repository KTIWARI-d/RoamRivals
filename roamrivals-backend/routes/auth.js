const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Admin = require("../models/AdminSchema");

// Register Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Check if email is from a valid college domain
  const validDomains = ["example.edu", "college.edu"]; // Add your valid college domains here
  const domain = email.split("@")[1];
  if (!validDomains.includes(domain)) {
    return res.status(400).json({ error: "Invalid college domain email" });
  }

  // Check if user with email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  // Create a new user
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: "Invalid email" });
  }

  // Check if password is correct
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(400).json({ error: "Invalid password" });
  }

  // Generate JWT token
  const token = jwt.sign({ userId: user._id }, "secretkey");

  res.status(200).json({ message: "Login successful", token });
});

// Admin Login Route
router.post("/admin/login", async (req, res) => {
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

module.exports = router;
