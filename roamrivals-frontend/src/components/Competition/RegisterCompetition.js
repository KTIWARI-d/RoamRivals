// src/components/Competition/RegisterCompetition.js
import React from "react";
import PaymentButton from "../Payment/PaymentButton";

const RegisterCompetition = ({ userId, competitionId }) => {
  const amount = 50000; // Example amount in paise (500.00 INR)
  const currency = "INR";
  const receipt = `receipt_${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div>
      <h1>Register for Competition</h1>
      <PaymentButton
        amount={amount}
        currency={currency}
        receipt={receipt}
        userId={userId}
        competitionId={competitionId}
      />
    </div>
  );
};

export default RegisterCompetition;
