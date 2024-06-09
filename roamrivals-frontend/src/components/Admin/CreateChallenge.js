// src/components/Admin/CreateChallenge.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateChallenge = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/admin/challenge", {
        title,
        description,
        startDate,
        endDate,
      });
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setError("");
      alert("Challenge created successfully");
      navigate("/admin/challenge-dashboard");
    } catch (error) {
      setError("Failed to create challenge");
    }
  };

  return (
    <div>
      <h1>Create Challenge</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div>
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <button type="submit">Create Challenge</button>
      </form>
    </div>
  );
};

export default CreateChallenge;
