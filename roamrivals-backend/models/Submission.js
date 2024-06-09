// models/Submission.js
const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  challengeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Challenge",
    required: true,
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  reviewed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Submission", submissionSchema);
