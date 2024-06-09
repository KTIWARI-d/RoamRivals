// backend/config/razorpay.js
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "rzp_test_GxKMcLGFTXnqXU",
  key_secret: "9Elg7x78FBLj9JRmvlXnopIS",
});

module.exports = razorpay;
