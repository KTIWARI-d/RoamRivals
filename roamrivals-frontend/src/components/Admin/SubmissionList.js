// src/components/Admin/SubmissionList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SubmissionList = () => {
  const { challengeId } = useParams();
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/challenges/${challengeId}/submissions`
        );
        setSubmissions(response.data);
      } catch (error) {
        setError("Failed to fetch submissions");
      }
    };
    fetchSubmissions();
  }, [challengeId]);

  return (
    <div>
      <h1>Submissions</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <ul>
        {submissions.map((submission) => (
          <li key={submission._id}>
            <a href={`/admin/submissions/${submission._id}`}>
              {submission.content}
            </a>
            {submission.reviewed && <span> (Reviewed)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionList;
