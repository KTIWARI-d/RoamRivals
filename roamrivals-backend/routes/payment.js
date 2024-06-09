// backend/routes/payment.js
const express = require("express");
const router = express.Router();
const razorpay = require("../config/razorpay");
const crypto = require("crypto");
const UserCompetition = require("../models/UserCompetition");

router.post("/create-order", async (req, res) => {
  const { amount, currency, receipt } = req.body;

  try {
    const order = await razorpay.orders.create({
      amount,
      currency,
      receipt,
    });
    console.log(amount);
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

router.post("/verify", async (req, res) => {
  const { paymentId, orderId, signature, userId, competitionId } = req.body;

  const shasum = crypto.createHmac("sha256", "rzp_test_GxKMcLGFTXnqXU");
  shasum.update(`${orderId}|${paymentId}`);
  const digest = shasum.digest("hex");

  if (digest === signature) {
    const userCompetition = new UserCompetition({
      user_id: userId,
      competition_id: competitionId,
      payment_id: paymentId,
    });

    try {
      await userCompetition.save();
      res
        .status(200)
        .json({ message: "Payment verified and registration successful" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to update registration" });
    }
  } else {
    res.status(400).json({ error: "Invalid payment signature" });
  }
});

module.exports = router;
