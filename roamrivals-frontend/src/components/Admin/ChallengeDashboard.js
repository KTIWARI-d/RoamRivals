// src/components/Admin/ChallengeDashboard.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChallengeDashboard = () => {
  const [challenges, setChallenges] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/admin/challenges"
        );
        setChallenges(response.data);
      } catch (error) {
        setError("Failed to fetch challenges");
      }
    };
    fetchChallenges();
  }, []);

  return (
    <div>
      <h1>Challenge Dashboard</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge._id}>
            <h2>{challenge.title}</h2>
            <p>{challenge.description}</p>
            <p>
              Start Date: {new Date(challenge.startDate).toLocaleDateString()}
            </p>
            <p>End Date: {new Date(challenge.endDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChallengeDashboard;
