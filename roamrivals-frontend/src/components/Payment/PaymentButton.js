import React, { useState } from "react";
import axios from "axios";

const PaymentButton = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [receipt, setReceipt] = useState("");

  const handlePayment = async () => {
    try {
      // Convert the amount to the smallest currency unit
      const orderAmount = parseFloat(amount) * 100;

      const order = await axios.post(
        "http://localhost:5000/api/payment/create-order",
        {
          amount: orderAmount,
          currency,
          receipt,
        }
      );

      const options = {
        key: process.env.rzp_test_GxKMcLGFTXnqXU, // Your Razorpay Key ID
        amount: order.data.amount,
        currency: order.data.currency,
        name: "RoamRivals",
        description: "Competition Registration",
        order_id: order.data.id,
        handler: async (response) => {
          const paymentId = response.razorpay_payment_id;
          const orderId = response.razorpay_order_id;
          const signature = response.razorpay_signature;

          // Verify payment on the backend
          const verifyRes = await axios.post(
            "http://localhost:5000/api/payment/verify",
            {
              paymentId,
              orderId,
              signature,
            }
          );

          alert(verifyRes.data.message);
        },
        prefill: {
          name: "Your Name",
          email: "your.email@example.com",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert("Payment failed");
    }
  };

  return (
    <div>
      <div>
        <label>
          Amount:
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </label>
      </div>
      <div>
        <label>
          Currency:
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            {/* Add more currencies as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          Receipt:
          <input
            type="text"
            value={receipt}
            onChange={(e) => setReceipt(e.target.value)}
            placeholder="Enter receipt"
          />
        </label>
      </div>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentButton;
