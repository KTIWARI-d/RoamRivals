import React, { useState } from "react";
import axios from "axios";

const ChallengeCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:5000/api/challenges",
        { title, description, startDate, endDate },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage(response.data.message);
      // Clear the form
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
    } catch (error) {
      setMessage("Failed to create challenge. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create Challenge</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Challenge</button>
      </form>
    </div>
  );
};

export default ChallengeCreate;
