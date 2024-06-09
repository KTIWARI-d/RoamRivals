const Challenge = require("../models/Challenge");

exports.createChallenge = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  const createdBy = req.user.id; // assuming the user ID is stored in req.user by auth middleware

  try {
    const newChallenge = new Challenge({
      title,
      description,
      startDate,
      endDate,
      createdBy,
    });

    await newChallenge.save();
    res.status(201).json({ message: "Challenge created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
