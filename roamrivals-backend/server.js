const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const submissionRoutes = require("./routes/submissions");
const profileRoutes = require("./routes/profile");
const challengeRoutes = require("./routes/challenges");
const paymentRoutes = require("./routes/payment");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api", submissionRoutes);
app.use("/api", profileRoutes);
app.use("/api", challengeRoutes);
app.use("/api/payment", paymentRoutes);

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/Cluster0"); //, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("MongoDB connected"))
// .catch((err) => console.error("Database connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
