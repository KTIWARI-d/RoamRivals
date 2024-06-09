// src/components/Admin/SubmissionDetails.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubmissionDetails = () => {
  const { id } = useParams();
  const [submission, setSubmission] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/submissions/${id}`
        );
        setSubmission(response.data);
      } catch (error) {
        setError("Failed to fetch submission details");
      }
    };
    fetchSubmission();
  }, [id]);

  const markAsReviewed = async () => {
    try {
      await axios.put(`http://localhost:5000/api/submissions/${id}/reviewed`);
      setSubmission((prev) => ({ ...prev, reviewed: true }));
    } catch (error) {
      setError("Failed to mark submission as reviewed");
    }
  };

  if (!submission) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Submission Details</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <p>
          <strong>Content:</strong> {submission.content}
        </p>
        <p>
          <strong>Date:</strong> {new Date(submission.date).toLocaleString()}
        </p>
        <p>
          <strong>Reviewed:</strong> {submission.reviewed ? "Yes" : "No"}
        </p>
      </div>
      {!submission.reviewed && (
        <button onClick={markAsReviewed}>Mark as Reviewed</button>
      )}
    </div>
  );
};

export default SubmissionDetails;
