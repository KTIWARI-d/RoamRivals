// backend/models/UserCompetition.js
const mongoose = require("mongoose");

const UserCompetitionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  competition_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Competition",
    required: true,
  },
  registration_date: {
    type: Date,
    default: Date.now,
  },
});

const UserCompetition = mongoose.model(
  "UserCompetition",
  UserCompetitionSchema
);

module.exports = UserCompetition;
