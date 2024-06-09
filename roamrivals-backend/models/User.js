// models/User.js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  collegeEmailVerified: { type: Boolean, default: false },
  profile: {
    bio: String,
    avatar: String,
    trips: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trip" }],
    competitions: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Competition" },
    ],
    coins: { type: Number, default: 0 },
  },
  submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Submission" }],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
