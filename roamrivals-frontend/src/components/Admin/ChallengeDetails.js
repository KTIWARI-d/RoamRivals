// src/components/Admin/ChallengeDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ChallengeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/admin/challenges/${id}`
        );
        setChallenge(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setStartDate(response.data.startDate);
        setEndDate(response.data.endDate);
      } catch (error) {
        setError("Failed to fetch challenge details");
      }
    };
    fetchChallenge();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/admin/challenges/${id}`, {
        title,
        description,
        startDate,
        endDate,
      });
      setError("");
      alert("Challenge updated successfully");
    } catch (error) {
      setError("Failed to update challenge");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/challenges/${id}`);
      setError("");
      alert("Challenge deleted successfully");
      navigate("/admin/challenge-dashboard");
    } catch (error) {
      setError("Failed to delete challenge");
    }
  };

  if (!challenge) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Challenge Details</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleUpdate}>
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
        <button type="submit">Update Challenge</button>
      </form>
      <button onClick={handleDelete} style={{ marginTop: "10px" }}>
        Delete Challenge
      </button>
    </div>
  );
};

export default ChallengeDetails;
