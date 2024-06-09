const express = require("express");
const router = express.Router();
const adminAuth = require("../middleware/adminMiddleware");
const Challenge = require("../models/Challenge");

// Create a new challenge
router.post("/challenges", adminAuth, async (req, res) => {
  const { title, description, deadline } = req.body;

  try {
    const challenge = new Challenge({
      title,
      description,
      deadline,
      createdBy: req.user._id,
    });
    await challenge.save();
    res
      .status(201)
      .json({ message: "Challenge created successfully", challenge });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
