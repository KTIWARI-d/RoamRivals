// middleware/adminMiddleware.js
const User = require("../models/User");

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).json({ error: "Access denied" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
