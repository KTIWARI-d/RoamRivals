const mongoose = require("mongoose");

const ChallengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  submissions: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      fileUrl: String,
      submissionDate: { type: Date, default: Date.now },
    },
  ],
});

const Challenge = mongoose.model("Challenge", ChallengeSchema);

module.exports = Challenge;
