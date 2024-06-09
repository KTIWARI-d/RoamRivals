// routes/submissions.js
const express = require("express");
const router = express.Router();
const Submission = require("../models/Submission");

// Get All Submissions for a Challenge
router.get("/challenges/:challengeId/submissions", async (req, res) => {
  try {
    const submissions = await Submission.find({
      challengeId: req.params.challengeId,
    });
    res.status(200).json(submissions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get Submission By ID
router.get("/submissions/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Mark Submission as Reviewed
router.put("/submissions/:id/reviewed", async (req, res) => {
  try {
    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      { reviewed: true },
      { new: true }
    );
    if (!submission) {
      return res.status(404).json({ error: "Submission not found" });
    }
    res.status(200).json(submission);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
