// src/components/Admin/AdminDashboard.js
import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link to="/admin/create-challenge">Create Challenge</Link>
        </li>
        <li>
          <Link to="/admin/challenge-dashboard">Manage Challenges</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
