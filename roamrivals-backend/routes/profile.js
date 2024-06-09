const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware"); // Import the protect function

// Get User Profile
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("submissions");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update User Profile
router.put("/profile", protect, async (req, res) => {
  const { name, profile } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, profile },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
